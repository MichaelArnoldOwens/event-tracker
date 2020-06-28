# Event Tracker

The library supports 3 operations:

1.  `sendEvent(ttl)` - signal that a single event happened. `ttl` by default is set to 5 minutes. You can pass a time in milliseconds if you want to override the default 5 minute event `ttl`.

2.  `getEventsAtTime(seconds)` - request the number of events that happened over a user-specified amount of time in seconds until current time. Since the event only lives for up to 5 minutes, you have now till 5 minutes in the past to query. This function supports seconds level of precision.

3.  `clearQueue()` - will empty the queue and clear all the timeouts associated with it;

## Intro

Typescript - strong typing
Jest - testing
Babel - transpiling
Prettier - linting / formatting / code styles

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
