import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    post: {
      Accept: 'application/json',
      ['Client-ID']: process.env.CLIENT_ID,
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  },
});
