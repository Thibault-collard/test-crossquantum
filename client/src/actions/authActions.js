import {
  SET_RECENT_MOVIES,
} from "./types";// Register User
import store from '../store/store';

export const getLatestMovies = () => dispatch => {

  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4f0db1be70e1cbd993ed2c3d03465680&page=1', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
              },
        })
        .then(results => results.json())
				.then(res => {
          dispatch(setListMovies(res.results));
        })
        .then(()=>{
          console.log(store.getState());
        })
};

export const setListMovies = res => {
  return {
    type: SET_RECENT_MOVIES,
    list_recent: res,
  };
};