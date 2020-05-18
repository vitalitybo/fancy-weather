import { city, todaysWeather } from './response';
import getCountryNameByCode from './getCountryNameByCode';
import { skycons, getIconName } from './weatherIcons';


export default async () => {
  const countryName = await getCountryNameByCode(city.countryCode);

  document.querySelector('.weather__city')
    .innerHTML = `${city.name}, ${countryName}`;
  document.querySelector('.weather__description')
    .innerHTML = `${todaysWeather.main}`;
  document.querySelector('.weather__temperature')
    .innerHTML = `${todaysWeather.temperature}`;
  document.querySelector('.weather__feels-like')
    .innerHTML = `Feels like: ${todaysWeather.feelsLike}`;
  document.querySelector('.weather__wind')
    .innerHTML = `Wind: ${todaysWeather.wind}`;
  document.querySelector('.weather__humidity')
    .innerHTML = `Humidity: ${todaysWeather.humidity}%`;

  const todayIconContainer = document.getElementById('todayIcon');
  skycons.set(todayIconContainer, getIconName(todaysWeather.id, todaysWeather.iconName));
};
