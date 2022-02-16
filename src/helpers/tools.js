const shuffleArray = (arr) => {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const maybe = (p = 0.5) => Math.random() < p;

const randomElement = (arr) => arr[randomBetween(0, arr.length - 1)];

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomRecent = (interval, unit = 'days') => {
  const date = new Date();

  const factor = {
    days: 24 * 3600,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  const past = date.getTime() - 1000 * randomBetween(0, interval * factor[unit]);
  date.setTime(past);

  return date;
};

const randomTimestamp = () => {
  const intervals = [
    {interval: 3, unit: 'days'},
    {interval: 23, unit: 'hours'},
    {interval: 59, unit: 'minutes'},
    {interval: 59, unit: 'seconds'},
    {interval: 5, unit: 'seconds'},
  ];

  const r = randomElement(intervals);
  return randomRecent(r.interval, r.unit).toISOString();
};

export {shuffleArray, maybe, randomElement, randomBetween, randomTimestamp};
