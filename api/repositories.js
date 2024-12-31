const axios = require('axios');

module.exports = async (req, res) => {
  const username = 'your-username'; // Replace with the GitHub username
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
};
