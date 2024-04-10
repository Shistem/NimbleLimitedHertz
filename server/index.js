const express = require('express');
const axios = require('axios');
const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI } = require('../src/config');
const app = express();

app.get('/api/discord/login', (req, res) => {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;
  res.redirect(discordAuthUrl);
});

app.get('/api/discord/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post('https://discord.com/api/v9/oauth2/token', {
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_URI,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;

    const userResponse = await axios.get('https://discord.com/api/v9/users/@me', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    const user = {
      id: userResponse.data.id,
      username: userResponse.data.username,
      avatar: userResponse.data.avatar,
    };

    res.json({ accessToken: access_token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to authenticate with Discord' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});