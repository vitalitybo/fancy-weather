import getForecast from './get5DaysForecast';
import renderTodaysWeather from './renderTodaysWeather';
import render3DaysForecast from './render3DaysForecast';
import { mapBox } from './mapBox';
import { city } from './response';
import getImage from './getBGImage';
// import { skycons } from './weatherIcons';

export default async function searchSubmitHandler(event) {
  event.preventDefault();

  // const searchButton = document.getElementById('searchCity');
  const searchInput = document.forms[0].elements.searchCity;

  await getForecast(searchInput.value);
  await renderTodaysWeather();
  render3DaysForecast();
  mapBox.changeCity(city);
  getImage();
}
