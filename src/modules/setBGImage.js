const setBGImage = (imageURL) => {
  const bgImage = document.querySelector('.bg-image');
  bgImage.style.backgroundImage = `url(${imageURL})`;
};

export default setBGImage;
