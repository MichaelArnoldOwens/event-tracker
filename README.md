# Event Tracker
The library supports two operations:

1.  `sendEvent(ttl)` - signal that a single event happened. Events by default are stored for up to 5 minutes. You can pass a time in milliseconds if you want to override the default 5 minute event TTL.

2. `getEventsAtTime(seconds)` - request the number of events that happened over a user-specified amount of time in seconds until current time. Since the event only lives for up to 5 minutes, you have now till 5 minutes in the past to query. This function supports seconds level of precision. 

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