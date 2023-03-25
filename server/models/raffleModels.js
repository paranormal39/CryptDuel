const mongoose = require('mongoose');

const RaffleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  prize: {
    type: String,
    required: true
  },
  entries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entry'
  }]
});

module.exports = mongoose.model('Raffle', RaffleSchema);
