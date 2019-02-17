// third party libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// actions
import * as actions from './phoneNumbersAction';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Phonenumbers Actions', () => {
  it('should generate phone numbers when the action is called', async () => {
    const expectedActions = [
      {
        type: 'GENERATE_PHONE_NUMBERS',
        phoneNumber: {
          id: 1,
          randomPhoneNumber: 23456789
        }
      }
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(actions.generatePhoneNumbers({ id: 1, randomPhoneNumber: 23456789 }));
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('should sort phone numbers in ascending order when the action is called', async () => {
    const expectedActions = [
      {
        type: 'SORT_PHONE_NUMBERS_ASCENDING',
      }
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(actions.sortPhoneNumbersAscending());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should sort phone numbers in descending order when the action is called', async () => {
    const expectedActions = [
      {
        type: 'SORT_PHONE_NUMBERS_DESCENDING'
      }
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(actions.sortPhoneNumbersDescending());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
