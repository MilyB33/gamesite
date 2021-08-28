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

export const flattenData = (res) => {
  const connected = getConnectedData(res);
  return connected.map((item) => {
    return {
      ...item.fields,
      image: {
        title: item.fields.image.fields.title,
        url: `https:${item.fields.image.fields.file.url}`,
      },
    };
  });
};
