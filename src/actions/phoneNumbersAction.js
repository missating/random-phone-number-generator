const GENERATE_PHONE_NUMBERS = 'GENERATE_PHONE_NUMBERS';
const SORT_PHONE_NUMBERS_ASCENDING = 'SORT_PHONE_NUMBERS_ASCENDING';
const SORT_PHONE_NUMBERS_DESCENDING = 'SORT_PHONE_NUMBERS_DESCENDING';

export const generatePhoneNumbers = (phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: GENERATE_PHONE_NUMBERS, phoneNumber })
  }
}

export const sortPhoneNumbersAscending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_PHONE_NUMBERS_ASCENDING })
  }
}

export const sortPhoneNumbersDescending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_PHONE_NUMBERS_DESCENDING })
  }
}
