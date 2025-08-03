const axios = require('axios');

const getFootballNews = async (req, res) => {
  const query = req.query.q || 'football';
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key missing in server environment' });
  }

  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=10&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch football news' });
  }
};

module.exports = { getFootballNews };
