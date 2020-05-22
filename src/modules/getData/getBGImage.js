import { UnsplashAPIKey } from '../../../environment';
import setBGImage from '../setBGImage';

const getBGImage = async () => {
  const APIKey = UnsplashAPIKey;
  const URI = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=spring+night&client_id=${APIKey}`;

  const response = await fetch(URI);
  const json = await response.json();

  const img = new Image();
  img.src = json.urls.full;
  img.onload = () => {
    setBGImage(json.urls.full);
  };
};

export default getBGImage;
