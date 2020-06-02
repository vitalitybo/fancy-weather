import { city as dataCity, todaysWeather } from '../dataStorage';
// import get3DaysForecast from './get3DaysForecast';
import { OpenWeatherMapApiKey } from '../../../environment';

export default async (city) => {
  const apiKey = OpenWeatherMapApiKey;
  const URIBase = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(URIBase);
  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
  } else {
    throw new Error(response.status);
  }

  dataCity.coords = responseBody.city.coord;
  dataCity.countryCode = responseBody.city.country;
  dataCity.name = responseBody.city.name;
  dataCity.timezone = responseBody.city.name;
  dataCity.latitude = responseBody.city.coord.lat;
  dataCity.longitude = responseBody.city.coord.lon;

  todaysWeather.main = responseBody.list[0].weather[0].description;
  todaysWeather.temperature = Math.round(+responseBody.list[0].main.temp);
  todaysWeather.feelsLike.celsius = Math.round(+responseBody.list[0].main.feels_like);
  todaysWeather.humidity = +responseBody.list[0].main.humidity;
  todaysWeather.wind = Math.round(+responseBody.list[0].wind.speed);
  todaysWeather.id = responseBody.list[0].weather[0].id;
  todaysWeather.iconName = responseBody.list[0].weather[0].icon;

  // await get3DaysForecast(dataCity.latitude, dataCity.longitude);

  // return responseBody;
};
