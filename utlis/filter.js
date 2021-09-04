const getConnectedData = (res) => {
  return res.items.map((item) =>
    item.fields.image1
      ? {
          ...item,
          image1: res.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.image1.sys.id
          ),
        }
      : item
  );
};

const connectAssets = (data) => {
  const { Asset: assets } = data.includes;
  const { items } = data;

  return items.map((item) => {
    return {
      ...item.fields,
      mainImage: assets.find(
        (asset) => asset.sys.id === item.fields.mainImage.sys.id
      ),
      galleryImages: item.fields.galleryImages.map((item) =>
        assets.find((asset) => asset.sys.id === item.sys.id)
      ),
    };
  });
};

export const flattenArticlesData = (res) => {
  const connected = connectAssets(res);

  return connected.map(flattenRules);
};

const flattenRules = (item) => {
  return {
    ...item,
    mainImage: {
      title: item.mainImage.fields.title,
      url: `https:${item.mainImage.fields.file.url}`,
    },
    galleryImages: item.galleryImages.map((item) => {
      return {
        title: item.fields.title,
        url: `https:${item.fields.file.url}`,
      };
    }),
  };
};
