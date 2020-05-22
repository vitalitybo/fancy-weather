import getForecast from './getData/get5DaysForecast';
import renderTodaysWeather from './render/renderTodaysWeather';
import render3DaysForecast from './render/render3DaysForecast';
import { mapBox } from './mapBox';
import { city } from './dataStorage';
import getImage from './getData/getBGImage';
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
