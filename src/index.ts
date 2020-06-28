import _ from 'lodash';

const FIVE_MIN = 3e5;
const eventQueue: Array<number> = [];

const sendEvent = (ttl: number = FIVE_MIN): void => {
  const currentTime = Date.now() / 1000;

  eventQueue.push(currentTime);
  setTimeout(() => {
    eventQueue.shift();
  }, ttl);
  getEventsCountAtTime(10)
};

const getEventsCountAtTime = (seconds: number): number => {
  const currentTime = Math.floor(Date.now() / 1000);
  const startTime = currentTime - seconds;
  const startIndex = _.sortedIndex(eventQueue, startTime);
  const endIndex = _.sortedLastIndex(eventQueue, currentTime);
  return endIndex - startIndex;
};


export { getEventsCountAtTime, sendEvent };
