import { current } from './dataStorage';
// import translate from './translate';
import { timer } from './timer';
import renderTodaysWeather from './render/renderTodaysWeather';

export default (locale) => {
  current.locale = locale;

  // const cityAndCountryString = await translate(`${city.name}, ${city.countryName}`);
  // const [cityStr, countryStr] = cityAndCountryString.split(' ');

  renderTodaysWeather();

  // const cityContainer = document.querySelector('.weather__city');
  // cityContainer.innerHTML = translatedWords.city[current.locale];

  timer.renderDate();
};
