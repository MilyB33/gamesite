const contentful = require('contentful');

class ContentfulClient {
  constructor() {
    this.cache.articles = this.getAllArticlesCards();
  }

  cache = {
    articles: {},
  };

  client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  getAllArticlesCards() {
    return this.client
      .getEntries({
        content_type: 'article',
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  }
}

export default new ContentfulClient();
