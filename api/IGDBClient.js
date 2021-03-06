import axios from 'axios';

// This header must be deleted to parse body on proxy server
delete axios.defaults.headers.post['Content-Type'];

class IGDBClient {
  client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_PROXY_IGDB,
    headers: {
      post: {
        'Content-type': 'text/plain',
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
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  getAllGames = async (limit = 10, offset = 0) => {
    return this.client
      .post(
        'games',
        `fields follows,name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,genres.name; sort rating desc; where rating_count >= 1000 & themes != (42);  limit ${limit};offset ${offset};`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  getFilteredGames = async (limit = 10, offset = 0, platformID) => {
    console.log(platformID);
    return this.client
      .post(
        'games',
        `fields follows,name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,genres.name; sort rating desc; where rating_count >= 1000 & themes != (42) & platforms.id = ${platformID};  limit ${limit};offset ${offset};`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  getExactGame = async (slug) => {
    return this.client
      .post(
        'games',
        `fields websites.*,collection.games.name,ports,similar_games.name,franchises.name,game_modes.*,age_ratings.*,involved_companies.*,involved_companies.company.*,summary,follows,name,rating,rating_count,slug,first_release_date,cover.*,platforms.*,genres.name,expansions.name,screenshots.*,themes.*,videos.*; sort rating desc; where slug="${slug}" & themes != (42);`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };
}

export default new IGDBClient();
