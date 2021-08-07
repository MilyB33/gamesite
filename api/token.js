import axios from 'axios';

export default axios.create({
  baseURL: 'https://id.twitch.tv/oauth2/token',
  params: {
    grant_type: 'client_credentials',
    client_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
});
