import getForecast from './get5DaysForecast';

export default async function searchSubmitHandler(event) {
  event.preventDefault();

  // const searchButton = document.getElementById('searchCity');
  const searchInput = document.forms[0].elements.searchCity;

  console.log(await getForecast(searchInput.value));
}
