import { city as respCity, todaysWeather } from './response';
import get3DaysForecast from './get3DaysForecast';

export default async function get5DaysForecast(city) {
  const apiKey = '893ed024781b5e719635fe62d00d09b1';
  const URIBase = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(URIBase);
  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
  } else {
    throw new Error(response.status);
  }

  respCity.coord = responseBody.city.coord;
  respCity.countryCode = responseBody.city.country;
  respCity.name = responseBody.city.name;
  respCity.timezone = responseBody.city.name;

  todaysWeather.main = responseBody.list[0].weather[0].description;
  todaysWeather.temperature = Math.round(+responseBody.list[0].main.temp);
  todaysWeather.feelsLike = Math.round(+responseBody.list[0].main.feels_like);
  todaysWeather.humidity = +responseBody.list[0].main.humidity;
  todaysWeather.wind = Math.round(+responseBody.list[0].wind.speed);
  todaysWeather.id = responseBody.list[0].weather[0].id;
  todaysWeather.iconName = responseBody.list[0].weather[0].icon;

  await get3DaysForecast(responseBody.city.coord.lat, responseBody.city.coord.lon);

  return responseBody;
}
