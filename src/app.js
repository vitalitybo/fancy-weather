import './styles/styles.scss';
import 'normalize-css';

import submitHandler from './modules/searchSubmitHandler';
import getForecast from './modules/getData/get5DaysForecast';
import renderTodaysWeather from './modules/render/renderTodaysWeather';
import render3DaysForecast from './modules/render/render3DaysForecast';
import { mapBox } from './modules/mapBox';
import { city, ipInfo } from './modules/dataStorage';
import getIPInfo from './modules/getData/getCurrentIPInfo';
import getBGImage from './modules/getData/getBGImage';

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
