const Xumm = require('xumm-sdk');
const { MultiPayment, Payment } = require('xumm-sdk/dist/types/models');

// Define the source, destination, and service addresses
const sourceAddress = "<your_source_address>";
const destinationAddress = "<your_destination_address>";
const serviceAddress = "<your_service_address>";

// Define the XRP amount to send and the service fee percentages
const totalAmount = 100; // XRP amount in drops
const serviceFeePercentage1 = 10; // percentage of the total amount for the first service fee
const serviceFeePercentage2 = 5; // percentage of the total amount for the second service fee

// Calculate the service fees based on the percentages
const serviceFee1 = Math.floor(totalAmount * serviceFeePercentage1 / 100);
const serviceFee2 = Math.floor(totalAmount * serviceFeePercentage2 / 100);

// Create the multi-payment transaction object
const multiPayment = new MultiPayment(
    sourceAddress,
    destinationAddress,
    [{
        MemoType: 'ServiceFeePercentage',
        MemoData: serviceFeePercentage1.toString()
    }]
);

// Create the first payment object for the destination address
const payment1 = new Payment(
    destinationAddress,
    totalAmount - serviceFee1 - serviceFee2,
    'XRP'
);
multiPayment.addPayment(payment1);

// Create the second payment object for the first service address
const payment2 = new Payment(
    serviceAddress,
    serviceFee1,
    'XRP',
    [{
        MemoType: 'ServiceFee',
        MemoData: serviceFee1.toString()
    }]
);
multiPayment.addPayment(payment2);

// Create the third payment object for the second service address
const payment3 = new Payment(
    serviceAddress,
    serviceFee2,
    'XRP',
    [{
        MemoType: 'ServiceFee',
        MemoData: serviceFee2.toString()
    }]
);
multiPayment.addPayment(payment3);

// Sign and submit the transaction using the XUMM SDK
(async () => {
    const xumm = new Xumm("<your_xumm_api_key>", "<your_xumm_api_secret>");
    const response = await xumm.submitTransaction(multiPayment);
    console.log(response);
})();
