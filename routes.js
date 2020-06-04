const addCampaign = require('./campaignControllers');
const addDonation = require('./donationControllers');
const matchControllers = require('./matchControllers');
const addMatch = matchControllers.addMatch;
const getMatches = matchControllers.getMatches;
const setTotalDonation = matchControllers.setTotalDonation;

const routes = (app) => {
  app.route('/campaign')
  .post(addCampaign);
  app.route('/:campaignId/donation')
  .post(addDonation);
  app.route('/:campaignId/match')
  .get(getMatches)
  .post(addMatch);
  app.route('/:matchId/totaldonation')
  .post(setTotalDonation);
};

module.exports = routes;
