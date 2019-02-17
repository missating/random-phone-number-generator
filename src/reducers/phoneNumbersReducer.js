export const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_PHONE_NUMBERS':
      return {
        ...state,
        data: [...action.phoneNumber]
      }
    case 'SORT_PHONE_NUMBERS_ASCENDING':
      return {
        ...state,
        data: [...state.data.sort((a, b) => {
          return a.randomPhoneNumber - b.randomPhoneNumber;
        })]
      }
    case 'SORT_PHONE_NUMBERS_DESCENDING':
      return {
        ...state,
        data: [...state.data.sort((a, b) => {
          return b.randomPhoneNumber - a.randomPhoneNumber;
        })]
      }
    default:
      return state;
  }
}
