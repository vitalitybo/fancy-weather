// import getForecast from './getData/getTodaysWeather';
// import renderTodaysWeather from './render/renderTodaysWeather';
// import render3DaysForecast from './render/render3DaysForecast';
// import { mapBox } from './mapBox';
// import { city } from './dataStorage';
// import getBGImage from './getData/getBGImage';
// import { timer } from './timer';
// import getCountryByCode from './getData/getCountryNameByCode';
import renderPage from './render/renderPage';
import getData from './getData/getData';
// import { skycons } from './weatherIcons';

export default async function searchSubmitHandler(event) {
  event.preventDefault();

  // const searchButton = document.getElementById('searchCity');
  const searchInput = document.forms[0].elements.searchCity;

  const initialLoading = false;
  await getData(initialLoading, searchInput.value);
  // await getForecast(searchInput.value);
  // await getCountryByCode(city.countryCode);
  // await getBGImage();

  const changeCity = true;
  renderPage(changeCity);
}
