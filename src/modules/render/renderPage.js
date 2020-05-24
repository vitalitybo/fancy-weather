import renderTodaysWeather from './renderTodaysWeather';
import render3DaysForecast from './render3DaysForecast';
import { mapBox } from '../mapBox';
import { city } from '../dataStorage';
import { timer } from '../timer';

export default (changeCity) => {
  renderTodaysWeather();
  render3DaysForecast();
  timer.init(city.timezoneOffset);
  if (changeCity) {
    mapBox.changeCity(city);
  } else {
    mapBox.init(city);
  }
};
