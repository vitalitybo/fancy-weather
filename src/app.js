import './styles/styles.scss';
import 'normalize-css';

import { Skycons } from './modules/skycons';
// import { todaysWeather, city, tomorrowWeather,
//  afterOneWeather, afterTwoWeather } from './modules/response';
// import { city, todaysWeather } from './modules/response';
import submitHandler from './modules/searchSubmitHandler';
import getForecast from './modules/get5DaysForecast';
import renderTodaysWeather from './modules/renderTodaysWeather';


getForecast('Minsk')
  .then(renderTodaysWeather);

// { city.coord, city.country, city.name, city.timezone } =  forecast.city ;

const skycons = new Skycons({ color: 'pink' });
const icon1 = document.getElementById('icon1');
const tomorrow = document.getElementById('tomorrow');
const afterOneDay = document.getElementById('afterOneDay');
const afterTwoDays = document.getElementById('afterTwoDays');

skycons.add(icon1, 'rain');
skycons.add(tomorrow, 'snow');
skycons.add(afterOneDay, 'rain');
skycons.add(afterTwoDays, 'partly-cloudy-day');

skycons.play();

const searchForm = document.forms[0];
searchForm.onsubmit = submitHandler;
