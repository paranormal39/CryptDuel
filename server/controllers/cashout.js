const xumm = require('xumm-sdk');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModels'); // Import the User model from your Mongoose schema

const cashout = async (req, res) => {
  const { rewardAmount } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send('Authorization header missing');
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    const userId = decodedToken.userId;

    const user = await User.findById(userId);

    if (!user) {
      res.status(401).send('User not found');
      return;
    }

    // Verify that user has enough rewards to cash out
    if (user.rewards < rewardAmount) {
      res.status(400).send('Insufficient rewards balance');
      return;
    }
    const currencycode = "47616D657258476F6C6400000000000000000000";

    // Generate XUMM transaction
    const txJson = {
      TransactionType: 'Payment',
      Destination: 'user_xumm_address',
      Amount: {
        "currency" : currencycode,
        "value" : rewardAmount,
        "issuer" :"rMczrvMki7DuXsuMf3zGUrqAmWvLKZNnt2"
      },
      DestinationTag: 'GXG Earnings',
      Memos: [
        {
          MemoType: 'Memo',
          MemoData: 'optional_memo_data',
        },
      ],
    };

    const xummApiResponse = await xumm.prepare({
      txjson: txJson,
      options: {
        submit: true,
        expire: 1440,
      },
    });

    if (!xummApiResponse || !xummApiResponse.uuid) {
      // XUMM transaction preparation failed
      res.status(500).send('Failed to prepare XUMM transaction');
      return;
    }

    // XUMM transaction prepared successfully
    // Deduct reward amount from user's balance and save changes
    user.rewards -= rewardAmount;
    await user.save();

    res.send('XUMM transaction submitted');
  } catch (err) {
    console.error(err);
    res.status(401).send('Invalid token');
  }
};

module.exports = cashout;
