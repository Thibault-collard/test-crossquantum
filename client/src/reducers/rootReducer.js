import {
  SET_RECENT_MOVIES,
  SET_GENRE_MOVIES
} from "../actions/types";

const initialState = {
  movies: {},
  genre:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_RECENT_MOVIES:
      return {
        ...state,
        movies: action
      };
    case SET_GENRE_MOVIES:
      return {
        ...state,
        genre: action
      };
    default:
      return state;
  }
}