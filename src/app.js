import './styles/styles.scss';
import 'normalize-css';

import submitHandler from './modules/searchSubmitHandler';
// import getForecast from './modules/getData/getTodaysWeather';
// import renderTodaysWeather from './modules/render/renderTodaysWeather';
// import render3DaysForecast from './modules/render/render3DaysForecast';
// import { mapBox } from './modules/mapBox';
// import { city, ipInfo } from './modules/dataStorage';
// import getIPInfo from './modules/getData/getCurrentIPInfo';
// import getBGImage from './modules/getData/getBGImage';
// import { timer } from './modules/timer';
import selectLanguageHandler from './modules/selectLanguageHandler';
// import getCountryByCode from './modules/getData/getCountryNameByCode';
import renderPage from './modules/render/renderPage';
import getData from './modules/getData/getData';

window.onload = async () => {
  // await getIPInfo();

  // await getForecast(ipInfo.city || 'Paris');
  // await getCountryByCode(city.countryCode);
  // await getBGImage();
  const inititalLoading = true;
  await getData(inititalLoading);
  renderPage();

  const searchForm = document.forms[0];
  searchForm.onsubmit = submitHandler;

  const langSelect = document.querySelector('.controls__change-language');
  langSelect.addEventListener('change', selectLanguageHandler);
};
