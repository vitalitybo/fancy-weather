import getIPInfo from './getCurrentIPInfo';
import getTodaysWeather from './getTodaysWeather';
import get3DaysForecast from './get3DaysForecast';
import getCountryByCode from './getCountryNameByCode';
import { ipInfo, city } from '../dataStorage';
import getBGImage from './getBGImage';
import translate from '../translate';

export default async (initialLoading = undefined, currentCity) => {
  if (initialLoading) {
    await getIPInfo();
  }

  await getTodaysWeather(currentCity || ipInfo.city || 'Paris');
  await get3DaysForecast(city.latitude, city.longitude);
  await getCountryByCode(city.countryCode);
  await getBGImage();
  await translate(`${city.name}, ${city.countryName}`, 'en', 'ru', 'be');
};
