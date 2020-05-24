import { city } from '../dataStorage';

export default async function getCountryByCode(code) {
  const URI = `https://restcountries.eu/rest/v2/alpha/${code}`;

  const response = await fetch(URI);
  const body = await response.json();

  city.countryName = body.name;
}
