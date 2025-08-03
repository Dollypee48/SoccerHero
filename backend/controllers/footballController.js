import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


if (!process.env.FOOTBALL_API_KEY) {
  console.error('❌ FOOTBALL_API_KEY is not defined in .env');
  process.exit(1); 
}

const API = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_API_KEY,
  },
});


export const getFixtures = async (req, res) => {
  const { leagueCode } = req.params;
  if (!leagueCode) {
    return res.status(400).json({ error: 'League code is required' });
  }

  try {
    const response = await API.get(`/competitions/${leagueCode}/matches?status=SCHEDULED`);
    res.json(response.data);
  } catch (err) {
    console.error(`❌ Error fetching fixtures for ${leagueCode}:`, err.message);
    res.status(500).json({ error: 'Failed to fetch fixtures' });
  }
};


export const getStandings = async (req, res) => {
  const { leagueCode } = req.params;
  if (!leagueCode) {
    return res.status(400).json({ error: 'League code is required' });
  }

  try {
    const response = await API.get(`/competitions/${leagueCode}/standings`);
    res.json(response.data);
  } catch (err) {
    console.error(`❌ Error fetching standings for ${leagueCode}:`, err.message);
    res.status(500).json({ error: 'Failed to fetch standings' });
  }
};


export const getMatchDetails = async (req, res) => {
  const { matchId } = req.params;

  if (!matchId) {
    return res.status(400).json({ error: 'Match ID is required' });
  }

  try {
    console.log(`Fetching match details for matchId: ${matchId}`);
    const response = await API.get(`/matches/${matchId}`);
    res.status(200).json(response.data); 
  } catch (err) {
    console.error(`❌ Error fetching match details for ID ${matchId}:`, err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch match details' });
  }
};
