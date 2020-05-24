import { current } from './dataStorage';
import { weekDays, months } from './months';

export default class Timer {
  static HOURS_OFFSET = 60000;

  static API_OFFSET_RATIO = 1000;

  constructor() {
    this.timerContainer = document.querySelector('.weather__time');
    this.dateContainer = document.querySelector('.weather__date');
  }

  init(timeZoneOffset) {
    clearInterval(this.interval);
    this.timeZoneOffset = timeZoneOffset;
    this.setDate();
    this.renderDate();
    this.startTimer();
  }

  setDate() {
    this.date = new Date(Date.now()
      + (this.timeZoneOffset * Timer.API_OFFSET_RATIO
        + new Date().getTimezoneOffset() * Timer.HOURS_OFFSET));
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setDate();
      this.renderTime();
    }, 1000);
  }

  renderTime() {
    const hours = Timer.checkTime(this.date.getHours());
    const minutes = Timer.checkTime(this.date.getMinutes());
    const seconds = Timer.checkTime(this.date.getSeconds());
    this.timerContainer.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  renderDate() {
    this.dateContainer.innerHTML = this.getDateString(current.locale);
  }

  static checkTime(num) {
    return num < 10 ? `0${num}` : num;
  }

  getDateString(locale) {
    return `${weekDays[locale][this.date.getDay()]
    } ${this.date.getDate()
    } ${months[locale][this.date.getMonth()]}`;
  }
}

export const timer = new Timer();
