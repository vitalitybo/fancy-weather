import getBGImage from './getData/getBGImage';
import setBGImage from './setBGImage';

export default async () => {
  const imageURL = await getBGImage();
  setBGImage(imageURL);
};
