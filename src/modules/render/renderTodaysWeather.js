import { todaysWeather, current, translatedWords } from '../dataStorage';
// import getCountryNameByCode from '../getData/getCountryNameByCode';
import { skycons, getIconName } from '../weatherIcons';
import { weatherDescription } from '../months';


export default () => {
  document.querySelector('.weather__city')
    .innerHTML = `${translatedWords.city[current.locale]}`;
  console.log(current.locale, translatedWords.city[current.locale]);
  document.querySelector('.weather__description')
    .innerHTML = `${translatedWords.weatherDescription[current.locale]}`;
  document.querySelector('.weather__temperature')
    .innerHTML = `${todaysWeather.temperature}`;
  document.querySelector('.weather__feels-like')
    .innerHTML = `${weatherDescription[current.locale][0]}: ${todaysWeather.feelsLike}`;
  document.querySelector('.weather__wind')
    .innerHTML = `${weatherDescription[current.locale][1]}: ${todaysWeather.wind}`;
  document.querySelector('.weather__humidity')
    .innerHTML = `${weatherDescription[current.locale][2]}: ${todaysWeather.humidity}%`;

  const todayIconContainer = document.getElementById('todayIcon');
  skycons.set(todayIconContainer, getIconName(todaysWeather.id, todaysWeather.iconName));
};
