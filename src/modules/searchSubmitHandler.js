import getForecast from './get5DaysForecast';
import renderTodaysWeather from './renderTodaysWeather';

export default async function searchSubmitHandler(event) {
  event.preventDefault();

  // const searchButton = document.getElementById('searchCity');
  const searchInput = document.forms[0].elements.searchCity;

  await getForecast(searchInput.value);
  await renderTodaysWeather();
}
