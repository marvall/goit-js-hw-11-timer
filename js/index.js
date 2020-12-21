class CountdownTimer {
  constructor({ selector, date }) {
    this.selector = document.querySelector(selector);
    this.date = date;
    this._timerID = null;
    this.start();
  }
  setDate(deltaTime) {
    if (deltaTime <= 0) {
      //check to left time
      clearInterval(this._timerID);

      //make a description "Finish"
      this.selector.innerHTML = `<div class="container p-3 badge badge-success" style="width: 300px; height=200px; font-size: 72px">FINISH</div>`;
    } else {
      let days = this.selector.querySelector('span[data-value="days"]');
      let hours = this.selector.querySelector('span[data-value="hours"]');
      let mins = this.selector.querySelector('span[data-value="mins"]');
      let secs = this.selector.querySelector('span[data-value="secs"]');
      days.textContent = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
      hours.textContent = Math.floor(
        (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      mins.textContent = Math.floor(
        (deltaTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      secs.textContent = Math.floor((deltaTime % (1000 * 60)) / 1000);
    }
  }
  makeInterval() {
    if (this._timerID === null) {
      this._timerID = setInterval(() => {
        const delta = this.date - Date.now();
        this.setDate(delta);
      }, 1000);
    }
  }
  start() {
    this.makeInterval();
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  date: new Date("Jan 1, 2021, 0:00"),
});
