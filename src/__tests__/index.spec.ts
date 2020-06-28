import {getEventsCountAtTime, sendEvent} from '../index'

const RealDate = Date.now

// beforeAll(() => {
//   global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime())
// });

afterAll(() => {
  global.Date.now = RealDate
});

const mockDateNow = (dateString:string) => {
  global.Date.now = jest.fn(() => new Date(dateString).getTime())
}

it('should remove event after a given time', (done) => {
  mockDateNow('2019-04-07T10:20:30Z');
  sendEvent(2000);
  setTimeout(() => {
    expect(getEventsCountAtTime(1)).toEqual(1);
  }, 0)
  setTimeout(() => {
    expect(getEventsCountAtTime(2)).toEqual(0);
    done();
  }, 5000)
})

it('should return correct number of events', (done) => {
  mockDateNow('2019-04-07T10:20:30Z');
  sendEvent(2000);
  setTimeout(() => {
    expect(getEventsCountAtTime(1)).toEqual(1);
    done()
  }, 1000)
})



