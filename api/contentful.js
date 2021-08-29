const contentful = require('contentful');

class ContentfulClient {
  constructor() {
    this.client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: 'master',
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  }

  async getArticlesCardHome() {
    return this.client
      .getEntries({
        content_type: 'article',
        'fields.isDisplayedOnHomePage': 'true',
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  async getAllArticlesCards() {
    return this.client
      .getEntries({
        content_type: 'article',
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  // async getData() {
  //   return this.client
  //     .getEntries()
  //     .then((res) => this.getConnectedData(res))
  //     .catch(console.error);
  // }

  getConnectedData(data) {
    return data.items.map((item) =>
      item.fields.image1
        ? {
            ...item,
            image1: res.includes.Asset.find(
              (asset) => asset.sys.id === item.fields.image1.sys.id
            ),
          }
        : item
    );
  }

  filterData(data) {
    return data.items.map((item) => documentToHtmlString(item));
  }
}

export default new ContentfulClient();
