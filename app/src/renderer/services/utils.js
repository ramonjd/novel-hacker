export function padNumber(n) {
  n = Number(n);
  return (n < 10 && n >= 0) ? `0${n}` : n;
}

export function getCompletedTimePercentage(current, duration) {
  const seconds = current / 1000;
  return 100 - Math.floor(seconds / duration * 100);
}
