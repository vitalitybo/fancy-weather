import renderTodaysWeather from './renderTodaysWeather';
import render3DaysForecast from './render3DaysForecast';
import renderMap from './renderMap';

export default async () => {
  await renderTodaysWeather();
  render3DaysForecast();
  renderMap();
};
