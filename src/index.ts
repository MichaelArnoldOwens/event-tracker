import _ from 'lodash';

const FIVE_MIN = 3e5;
const eventQueue: Array<number> = [];
const timers: Array<NodeJS.Timeout> = [];

const sendEvent = (ttl: number = FIVE_MIN): void => {
  const currentTime = Math.floor(Date.now() / 1000);

  eventQueue.push(currentTime);
  const timer = setTimeout(() => {
    eventQueue.shift();
    if (timers.length) {
      clearTimeout(timers.shift() as NodeJS.Timeout);
    }
  }, ttl);

  timers.push(timer);
};

const getEventsCountAtTime = (seconds: number): number => {
  const currentTime = Math.floor(Date.now() / 1000);
  const startTime = currentTime - seconds;
  const startIndex = _.sortedIndex(eventQueue, startTime);
  const endIndex = eventQueue.length;
  return endIndex - startIndex;
};

const clearQueue = () => {
  eventQueue.splice(0, eventQueue.length);
  while (timers.length) {
    clearTimeout(timers.shift() as NodeJS.Timeout);
  }
};

export { clearQueue, getEventsCountAtTime, sendEvent };
