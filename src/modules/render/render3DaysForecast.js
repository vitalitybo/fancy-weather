import { tomorrowWeather, afterOneWeather, afterTwoWeather, current } from '../dataStorage';
import { skycons, getIconName } from '../weatherIcons';

export default () => {
  const tomorrowClassSelector = '.weather__tomorrow .weather__temperature_mini';
  const afterOneDayClassSelector = '.weather__after-one-day .weather__temperature_mini';
  const afterTwoDaysClassSelector = '.weather__after-two-days .weather__temperature_mini';

  document.querySelector(tomorrowClassSelector)
    .innerHTML = current.degrees === 'celsius' ? tomorrowWeather.temperature : tomorrowWeather.farenheit;
  document.querySelector(afterOneDayClassSelector)
    .innerHTML = current.degrees === 'celsius' ? afterOneWeather.temperature : afterOneWeather.farenheit;
  document.querySelector(afterTwoDaysClassSelector)
    .innerHTML = current.degrees === 'celsius' ? afterTwoWeather.temperature : afterTwoWeather.farenheit;

  const tomorrowIconContainer = document.getElementById('tomorrow');
  const afterOneDayIconContainer = document.getElementById('afterOneDay');
  const afterTwoDaysIconContainer = document.getElementById('afterTwoDays');

  skycons.set(tomorrowIconContainer, getIconName(tomorrowWeather.id, tomorrowWeather.iconName));
  skycons.set(afterOneDayIconContainer, getIconName(afterOneWeather.id, afterOneWeather.iconName));
  skycons.set(afterTwoDaysIconContainer, getIconName(afterTwoWeather.id, afterTwoWeather.iconName));
};
