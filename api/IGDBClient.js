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

  getPlatforms = async (platforms) => {
    return this.client
      .post(
        'platforms',
        `fields name,slug,platform_logo,abbreviation; sort id; where id = (${platforms});`
      )
      .then((res) => res.data);
  };

  getAllGames = async (limit = 10) => {
    return this.client
      .post(
        'games',
        `fields follows,name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,genres.name; sort rating desc; where rating_count >= 1000 & themes != (42);  limit ${limit};`
      )
      .then((res) => res.data);
  };

  getExactGame = async (slug) => {
    return this.client
      .post(
        'games',
        `fields websites.*,collection.games.name,ports,similar_games.name,franchises.name,game_modes.*,age_ratings.*,involved_companies.*,involved_companies.company.*,summary,follows,name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,genres.name,expansions.name,screenshots.*,themes.*,videos.*; sort rating desc; where slug="${slug}" & themes != (42);`
      )
      .then((res) => res.data);
  };
}

export default new IGDBClient();
