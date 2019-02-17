const GENERATE_PHONE_NUMBERS = 'GENERATE_PHONE_NUMBERS';
const SORT_NUMBERS_ASCENDING = 'SORT_NUMBERS_ASCENDING';
const SORT_NUMBERS_DESCENDING = 'SORT_NUMBERS_DESCENDING';

export const generatePhoneNumbers = (phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: GENERATE_PHONE_NUMBERS, phoneNumber })
  }
}

export const sortNumbersAscending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_NUMBERS_ASCENDING })
  }
}

export const sortNumbersDescending = () => {
  return (dispatch) => {
    dispatch({ type: SORT_NUMBERS_DESCENDING })
  }
}
