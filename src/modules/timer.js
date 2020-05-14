export class Timer {
  static HOURS_OFFSET = 3600;

  constructor(timeZone, lang) {
    this.timerZone = timeZone / Timer.HOURS_OFFSET;
    this.lang = lang;
    this.date = new Date();
    this.date.setHours(this.date.getHours + this.timerZone);
  }

  tick() {
    setInterval(() => {
      this.date
    }, 1000);
  }
}