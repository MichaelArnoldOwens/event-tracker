# Event Tracker

The library supports 3 operations:

1.  `sendEvent()` - signal that a single event happened. The event will 'live' for 5 minutes. It is possible to override the 5 minutes and pass an integer argument in milliseconds, but is not necessary and this featuer is mainly used for testing.

2.  `getEventsAtTime(seconds)` - request the number of events that happened over a user-specified amount of time in seconds until current time. Since the event only lives for up to 5 minutes, you have now till 5 minutes in the past to query. This function supports seconds level of precision.

3.  `clearQueue()` - will empty the queue and clear all the timeouts associated with it;

## Usage
```
import {sendEvent, getEventsCountAtTime} from 'src/index.ts';
sendEvent();
console.log(getEventsAtTime(10)); // 1
setTimeout(() => console.log(getEventsAtTime(1)), FIVE_MINS) // 0

```

## Setup

```
npm install
```

## Dev

```
npm run dev
```

## Tests

```
npm test
```
