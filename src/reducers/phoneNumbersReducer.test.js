// reducers
import reducer, { initialState } from './phoneNumbersReducer';


describe('Phone numbers reducer', () => {
  it('should return default state if no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should trigger the add number action', () => {
    expect(reducer(initialState, {
      type: 'GENERATE_PHONE_NUMBERS',
      phoneNumber: [{
        id: 1,
        randomPhoneNumber: 234567890
      }]
    })).toEqual({ data: [{ id: 1, randomPhoneNumber: 234567890 }] });
  });

  it('should trigger the ascending order filter action', () => {
    const reducerData = {
      data: [
        {
          id: 1,
          randomPhoneNumber: 12345678
        },
        {
          id: 2,
          randomPhoneNumber: 23456789
        }
      ]
    }
    expect(reducer(reducerData, {
      type: 'SORT_PHONE_NUMBERS_ASCENDING',
    })).toEqual({
      data: [
        {
          id: 1,
          randomPhoneNumber: 12345678
        },
        {
          id: 2,
          randomPhoneNumber: 23456789
        }
      ]
    });
  });

  it('should trigger the descending filter action', () => {
    const reducerData = {
      data: [
        {
          id: 1,
          randomPhoneNumber: 12345678
        },
        {
          id: 2,
          randomPhoneNumber: 23456789
        }
      ]
    }
    expect(reducer(reducerData, {
      type: 'SORT_PHONE_NUMBERS_DESCENDING',
    })).toEqual({
      data: [
        {
          id: 2,
          randomPhoneNumber: 23456789
        },
        {
          id: 1,
          randomPhoneNumber: 12345678
        }
      ]
    });
  });
});
