import renderTodaysWeather from './renderTodaysWeather';
import render3DaysForecast from './render3DaysForecast';

export default () => {
  renderTodaysWeather();
  render3DaysForecast();
  renderMap();
};
