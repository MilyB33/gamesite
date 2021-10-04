import { useState } from 'react';

const useGallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const openGallery = (image) => {
    setActivePhoto(image);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setActivePhoto(null);
  };

  return { openGallery, closeGallery, activePhoto, isGalleryOpen };
};

export default useGallery;
