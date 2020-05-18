import './styles/styles.scss';
import 'normalize-css';

// import { skycons } from './modules/skycons';
// import { todaysWeather, city, tomorrowWeather,
//  afterOneWeather, afterTwoWeather } from './modules/response';
// import { city, todaysWeather } from './modules/response';
import submitHandler from './modules/searchSubmitHandler';
import getForecast from './modules/get5DaysForecast';
import renderTodaysWeather from './modules/renderTodaysWeather';
import render3DaysForecast from './modules/render3DaysForecast';


getForecast('Minsk')
  .then(() => {
    renderTodaysWeather();
    render3DaysForecast();
  });

// { city.coord, city.country, city.name, city.timezone } =  forecast.city ;

// const skycons = new Skycons({ color: 'pink' });
// const todayIcon = document.getElementById('todayIcon');
// const tomorrow = document.getElementById('tomorrow');
// const afterOneDay = document.getElementById('afterOneDay');
// const afterTwoDays = document.getElementById('afterTwoDays');

// skycons.add(todayIcon, 'wind');
// skycons.add(tomorrow, 'snow');
// skycons.add(afterOneDay, 'rain');
// skycons.add(afterTwoDays, 'partly-cloudy-day');

const searchForm = document.forms[0];
searchForm.onsubmit = submitHandler;
