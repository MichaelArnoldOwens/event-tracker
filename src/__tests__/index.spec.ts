import { clearQueue, getEventsCountAtTime, sendEvent } from '../index';

const RealDate = Date.now;

beforeEach(() => {
  mockDateNow('2019-04-07T10:20:30Z');
  clearQueue();
});

afterAll(() => {
  global.Date.now = RealDate;
});

const mockDateNow = (dateString: string) => {
  global.Date.now = jest.fn(() => new Date(dateString).getTime());
};

it('should remove event after a given time', (done) => {
  sendEvent(2000);
  setTimeout(() => {
    expect(getEventsCountAtTime(1)).toEqual(1);
  }, 0);
  setTimeout(() => {
    expect(getEventsCountAtTime(2)).toEqual(0);
    done();
  }, 5000);
});

it('should return correct number of events (sequential add)', (done) => {
  sendEvent(2000);
  setTimeout(() => {
    expect(getEventsCountAtTime(1)).toEqual(1);
  }, 0);
  setTimeout(() => sendEvent(2000), 1000);
  setTimeout(() => {
    expect(getEventsCountAtTime(1)).toEqual(2);
    done();
  }, 1000);
});

it('should return correct number of events (sequential add with some expired)', (done) => {
  sendEvent(5000);
  setTimeout(() => expect(getEventsCountAtTime(4)).toEqual(1), 0);
  setTimeout(() => sendEvent(1000), 0);
  setTimeout(() => expect(getEventsCountAtTime(4)).toEqual(2), 0);
  setTimeout(() => sendEvent(4000), 0);
  setTimeout(() => expect(getEventsCountAtTime(4)).toEqual(3), 0);
  setTimeout(() => {
    expect(getEventsCountAtTime(3)).toEqual(2);
    done();
  }, 3000);
});
