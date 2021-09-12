const contentful = require('contentful');

class ContentfulClient {
  client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
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
