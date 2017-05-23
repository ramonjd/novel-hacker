import { padNumber, getCompletedTimePercentage } from './utils';

// default duration = 30 mins (1800 secs)
const DURATION = 1800;
const DIVIDER = ':';
const CLOCK_FACE = '00:00:00';
/*
  1 min : 60
  30 min : 1800
  1 hour : 3600
*/
const S = 1000;
const M = S * 60;
const H = M * 60;
const D = H * 24;

// key
// day =  Math.floor(delta / d);
// hour = Math.floor((delta % d) / h);
// min = Math.floor((delta % h) / m);
// sec = Math.floor((delta % m) / s);
function createCountDownClock(delta) {
    const countdownArray = [];
    countdownArray.push(padNumber(Math.floor((delta % D) / H)));
    countdownArray.push(padNumber(Math.floor((delta % H) / M)));
    countdownArray.push(padNumber(Math.floor((delta % M) / S)));
    return countdownArray.join(DIVIDER);
}

function createTimePercentage(delta, duration){
    return `${getCompletedTimePercentage(delta, duration)}%`;
}

/**
 * Creates countdown object singleton
 * @return {Countdown} Instance of Countdown
 */
class Countdown {
  constructor() {
    if (!Countdown.instance) {
      this.reset();
    }
    return Countdown.instance;
  }
  set(duration){
      if (duration) {
          this.duration = duration;
      }
      // set out seconds countdown to track seconds
      // let's add one second to account for the first setInterval delay
      this.countdown = this.duration + 1;
      return this;
  }
  tick() {
    this.now = new Date();
    this.delta = this.end.getTime() - now.getTime();
    if (this.delta < 0) {
        this.stop();
        this.complete = true;
        return false;
    }
    this.clock = createCountDownClock(this.delta);
    this.percentage = createTimePercentage(this.delta, this.duration);
    this.countdown--;
  }
  start() {
      this.end = new Date();
      // add selected seconds to current time
      this.end.setSeconds(end.getSeconds() + this.countdown);
      this.timer = setInterval(this.tick.bind(this), 1000);
      this.paused = false;
  }
  pause() {
    clearInterval(this.timer);
    this.paused = true;
  }
  toggle() {
      if (this.paused === true) {
          this.start();
      } else {
          this.pause();
      }
  }
  reset() {
      this.complete = false;
      this.duration = DURATION;
      this.clock = CLOCK_FACE;
      this.percentage = '0';
      this.paused = true;
  }
  stop() {
    this.complete = true;
    clearInterval(this.timer);
  }
}

const instance = () => {
    return new Countdown();
};

export default instance;
