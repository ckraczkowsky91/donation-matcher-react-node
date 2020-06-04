const mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
  id: String,
  name: String
});

var matchSchema = new mongoose.Schema({
  id: String,
  campaign_id: String,
  donorType: Boolean,
  perDollarAmount: Number,
  matchAmount: Number,
  timeLimitation: Number,
  dollarLimitation: Number,
  totalDonation: Number
});

var donationSchema = new mongoose.Schema({
  id: String,
  campaign_id: String,
  amount: Number
});

module.exports.campaignSchema = campaignSchema;
module.exports.matchSchema = matchSchema;
module.exports.donationSchema = donationSchema;
