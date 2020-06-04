const mongoose = require('mongoose');
const schemas = require('./model');
const campaignSchema = schemas.campaignSchema;

const Campaign = mongoose.model('Campaign', campaignSchema);

const addCampaign = (req, res) => {
  let newCampaign = new Campaign(req.body);
  newCampaign.save((err, Campaign) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Campaign);
    };
  });
};

module.exports = addCampaign;
