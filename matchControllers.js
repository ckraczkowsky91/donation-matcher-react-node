const mongoose = require('mongoose');
const schemas = require('./model');
const matchSchema = schemas.matchSchema;

const Match = mongoose.model('Match', matchSchema);

const addMatch = (req, res) => {
  let campaignId = req.params.campaignId;
  let newMatch = new Match({
    campaign_id: campaignId,
    matchAmount: req.body.matchAmount
  });
  newMatch.save((err, Match) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Match);
    };
  });
};

const getMatches = (req, res) => {
  let campaignId = req.params.campaignId;
  Match.find({campaign_id: campaignId}, (error, matches) => {
    res.status(200).send(matches);
  });
};

const setTotalDonation = (req, res) => {
  let matchId = req.params.matchId;
  console.log(matchId);
  Match.findOne({_id: matchId}, (error, match) => {
    if(error){
      res.status(500)
    } else {
      let matchAmount = match.matchAmount;
      let totalDonation = matchAmount.totalDonation + matchAmount;
      console.log(match);
    }
  });
};

module.exports.addMatch = addMatch;
module.exports.getMatches = getMatches;
module.exports.setTotalDonation = setTotalDonation;
