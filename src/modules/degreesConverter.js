import { todaysWeather, afterOneWeather, afterTwoWeather, tomorrowWeather } from "./dataStorage";

const converter = (celsiusDegrees) => {
  return Math.round((celsiusDegrees * 1.8) + 32);
};

const convertToFarenheit = () => {
  const dataToConvert = [
    todaysWeather,
    tomorrowWeather,
    afterOneWeather,
    afterTwoWeather,
    todaysWeather.feelsLike,
  ];

  dataToConvert.forEach((item) => {
    item.farenheit = converter(item.temperature);
  });
};

export default convertToFarenheit;
