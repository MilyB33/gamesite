import axios from 'axios';

class IGDBClient {
  client = axios.create({
    baseURL: 'https://api.igdb.com/v4',
    headers: {
      post: {
        Accept: 'application/json',
        ['Client-ID']: process.env.NEXT_PUBLIC_IGDB_CLIENT_ID,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_IGDB_API_TOKEN}`,
      },
    },
  });

  getPlatforms = async () => {
    return this.client
      .post(
        'platforms',
        'fields name,slug,platform_logo; sort id; where id = (5,6,7,11,34);'
      )
      .then((res) => res.data);
  };

  getAllGames = async (limit = 10) => {
    return this.client
      .post(
        'games',
        `fields name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,platforms.platform_logo.*; sort rating desc; where rating_count >= 1000 & themes != (42);  limit ${limit};`
      )
      .then((res) => res.data);
  };
}

export default new IGDBClient();
