import { tomorrowWeather, afterOneWeather, afterTwoWeather } from './response';


export default async function get3DaysForecast(latitude, longitude) {
  const APIKey = '893ed024781b5e719635fe62d00d09b1';
  const URI =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&appid=${APIKey}&units=metric`;

  const response = await fetch(URI);
  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
  } else {
    throw new Error(response.status);
  }

  

}
