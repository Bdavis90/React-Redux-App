import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS } from "../actions";

const initialState = {
  cardImg: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        cardImg: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
