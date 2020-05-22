import renderTodaysWeather from './renderTodaysWeather';
import render3DaysForecast from './render3DaysForecast';
import renderMap from './renderMap';

export default () => {
  renderTodaysWeather();
  render3DaysForecast();
  renderMap();
};
