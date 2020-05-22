import { Skycons } from './skycons';

export function getIconName(id, icon) {
  if ((id >= 200 && id <= 232)
    || (id >= 300 && id <= 321)
    || (id >= 500 && id <= 531 && id !== 511)) {
    return 'rain';
  }

  if ((id >= 600 && id <= 602)
    || (id >= 620 && id <= 622)) {
    return 'snow';
  }

  if ((id >= 611 && id <= 616)
    || (id === 511)) {
    return 'sleet';
  }

  if ((id >= 701 && id <= 762)) {
    return 'fog';
  }

  if ((id === 771 || id === 781)) {
    return 'wind';
  }

  if (id === 800) {
    if (icon === '01d') return 'clear-day';
    return 'clear-night';
  }

  if (id === 801) {
    if (icon === '02d') return 'partly-cloudy-day';
    return 'partly-cloudy-night';
  }

  if (id >= 802 && id <= 804) return 'cloudy';

  return undefined;
}

export const skycons = new Skycons({ color: 'white' });

skycons.play();
