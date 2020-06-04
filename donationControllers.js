const mongoose = require('mongoose');
const schemas = require('./model');
const donationSchema = schemas.donationSchema;
const matchControllers = require('./matchControllers');

const getMatches = matchControllers.getMatches;

const Donation = mongoose.model('Donation', donationSchema);

const addDonation = (req, res) => {
  let campaignId = req.params.campaignId;
  let newDonation = new Donation({
    campaign_id: campaignId,
    amount: req.body.amount
  });
  newDonation.save((err, donation) => {
    if (err) {
      res.send(err);
    } else {
      res.json(donation);
    };
  });
};

module.exports = addDonation;
