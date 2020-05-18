import { tomorrowWeather, afterOneWeather, afterTwoWeather } from './response';
import { skycons, getIconName } from './weatherIcons';

export default () => {
  const tomorrowClassSelector = '.weather__tomorrow .weather__temperature_mini';
  const afterOneDayClassSelector = '.weather__after-one-day .weather__temperature_mini';
  const afterTwoDaysClassSelector = '.weather__after-two-days .weather__temperature_mini';

  document.querySelector(tomorrowClassSelector)
    .innerHTML = tomorrowWeather.temperature;
  document.querySelector(afterOneDayClassSelector)
    .innerHTML = afterOneWeather.temperature;
  document.querySelector(afterTwoDaysClassSelector)
    .innerHTML = afterTwoWeather.temperature;

  const tomorrowIconContainer = document.getElementById('tomorrow');
  const afterOneDayIconContainer = document.getElementById('afterOneDay');
  const afterTwoDaysIconContainer = document.getElementById('afterTwoDays');

  skycons.set(tomorrowIconContainer, getIconName(tomorrowWeather.id, tomorrowWeather.iconName));
  skycons.set(afterOneDayIconContainer, getIconName(afterOneWeather.id, afterOneWeather.iconName));
  skycons.set(afterTwoDaysIconContainer, getIconName(afterTwoWeather.id, afterTwoWeather.iconName));
};
