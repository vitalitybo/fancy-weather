import getIPInfo from './getCurrentIPInfo';
import getTodaysWeather from './getTodaysWeather';
import get3DaysForecast from './get3DaysForecast';
import getCountryByCode from './getCountryNameByCode';
import {
  ipInfo,
  city,
  translatedWords,
  todaysWeather,
  current,
} from '../dataStorage';
import getBGImage from './getBGImage';
import translate from '../translate';

export default async (initialLoading = undefined, currentCity) => {
  if (initialLoading) {
    await getIPInfo();
  }

  let cityToFind;
  if (current.locale === 'be') {
    const response = await translate(currentCity, 'be', 'ru');
    cityToFind = response.ru;
    console.log(response);
  }

  await getTodaysWeather(cityToFind || currentCity || ipInfo.city || 'Paris');
  await get3DaysForecast(city.latitude, city.longitude);
  await getCountryByCode(city.countryCode);
  await getBGImage();
  const translatedCity = await translate(`${city.name}, ${city.countryName}`, 'en', 'ru', 'be');

  translatedWords.city.en = translatedCity.en;
  translatedWords.city.ru = translatedCity.ru;
  translatedWords.city.be = translatedCity.be;

  const translatedWeatherDescription = await translate(`${todaysWeather.main}`, 'en', 'ru', 'be');

  translatedWords.weatherDescription.en = translatedWeatherDescription.en;
  translatedWords.weatherDescription.ru = translatedWeatherDescription.ru;
  translatedWords.weatherDescription.be = translatedWeatherDescription.be;
};
