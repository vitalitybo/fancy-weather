export default async function get5DaysForecast(city) {
  const apiKey = '893ed024781b5e719635fe62d00d09b1';
  const URIBase = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  const response = await fetch(URIBase);
  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
  } else {
    throw new Error(response.status);
  }

  return responseBody;
}
