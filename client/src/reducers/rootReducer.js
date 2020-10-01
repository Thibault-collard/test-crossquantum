import {
  SET_RECENT_MOVIES,
} from "../actions/types";

const initialState = {
  movies: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_RECENT_MOVIES:
      return {
        ...state,
        movies: action
      };
    default:
      return state;
  }
}