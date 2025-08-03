import axios from 'axios';

const API = axios.create({
  baseURL: 'https://soccer-hero-nccm.vercel.app/api/football',
});


export const getFixtures = async (leagueCode = 'PL') => {
  try {
    const res = await API.get(`/fixtures/${leagueCode}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching fixtures:', error.message);
    throw error;
  }
};


export const getStandings = async (leagueCode = 'PL') => {
  try {
    const res = await API.get(`/standings/${leagueCode}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching standings:', error.message);
    throw error;
  }
};


export const getMatchDetails = async (matchId) => {
  try {
    const res = await API.get(`/matches/${matchId}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching match details:', error.message);
    throw error;
  }
};


export const getNews = async () => {
  try {
    const res = await API.get('/news');
    return res.data;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw error;
  }
};
