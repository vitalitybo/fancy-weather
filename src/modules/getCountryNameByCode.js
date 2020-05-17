export default async function getCountryByCode(code) {
  const URI = `https://restcountries.eu/rest/v2/alpha/${code}`;

  const response = await fetch(URI);
  const body = await response.json();

  return body.name;
}
