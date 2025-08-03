import express from 'express';
import {
  getFixtures,
  getStandings,
  getMatchDetails,
} from '../controllers/footballController.js';

const router = express.Router();


router.get('/fixtures/:leagueCode', getFixtures);
router.get('/standings/:leagueCode', getStandings);
router.get('/matches/:matchId', getMatchDetails);

export default router;
