import './styles/styles.scss';
import 'normalize-css';

import submitHandler from './modules/searchSubmitHandler';
import getForecast from './modules/get5DaysForecast';
import renderTodaysWeather from './modules/renderTodaysWeather';
import render3DaysForecast from './modules/render3DaysForecast';
import { mapBox } from './modules/mapBox';
import { city, ipInfo } from './modules/response';
import getIPInfo from './modules/getCurrentIPInfo';
import getBGImage from './modules/getBGImage';

window.onload = async () => {
  await getIPInfo();
  await getForecast(ipInfo.city || 'Paris')
    .then(() => {
      renderTodaysWeather();
      render3DaysForecast();
      mapBox.init(city);
    })
    .then(() => {
      getBGImage();
    });

  const searchForm = document.forms[0];
  searchForm.onsubmit = submitHandler;
};
