export default class Timer {
  static HOURS_OFFSET = 3600;

  constructor(timeZoneOffset) {
    this.date = new Date(Date.now() + (timeZoneOffset * 1000 + new Date().getTimezoneOffset() * 60000));
    console.log()
  }

  tick() {
    setInterval(() => {
      this.date
    }, 1000);
  }
};
