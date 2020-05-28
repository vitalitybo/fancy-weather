import { UnsplashAPIKey } from '../../../environment';
// import setBGImage from '../setBGImage';
// import { city } from '../dataStorage';

const getBGImage = async () => {
  const APIKey = UnsplashAPIKey;
  const URI = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=summer&client_id=${APIKey}`;
  let bgImageURL;

  const response = await fetch(URI);
  const json = await response.json();

  const img = new Image();
  img.src = json.urls.full;
  img.onload = () => {
    bgImageURL = json.urls.full;
    return bgImageURL;
  };
};

export default getBGImage;
