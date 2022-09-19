import axios from "axios";

export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_CREATE = "FILTER_CREATE";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";
export const FILTER_PLATFORM = "FILTER_PLATFORM"

const BaseUrl = 'https://ottogame.herokuapp.com'

export function getVideoGame() {
  return async function (dispatch) {
    var json = await axios.get(`${BaseUrl}/videogames`);
    return dispatch({
      type: "GET_VIDEOGAME",
      payload: json.data,
    });
  };
}


export const getGenres = (id) => {
  return async function (dispatch) {
    try {
      const genres = await axios.get(`${BaseUrl}/genres`);
      return dispatch({
        type: "GET_GENRES",
        payload: genres.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};


export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${BaseUrl}/videogames/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function searchVideogame(name) {

  return function (dispatch) {
    axios
      .get(`${BaseUrl}/videogames?name=${name}`)
      .then((videogame) => {
        dispatch({
          type: SEARCH_VIDEOGAME,
          payload: videogame.data,
        });
      })
      .catch((error) => {
      return alert('it is not a videogame name')
      });
  };
}


export const postVideogame = (payload) => {
  return async function (dispatch) {
    let json = await axios.post(`${BaseUrl}/videogames`, payload);
    return dispatch({
      type: "POST_VIDEOGAME",
      payload: json.data,
    });
  };
};


export function filterGenres(payload) {
  return {
    type: FILTER_GENRES,
    payload,
  };
}

export function filterCreate(payload) {
  return {
    type: FILTER_CREATE,
    payload,
  };
}

export function sortByName(payload) {
  return {
    type: ORDER_NAME,
    payload,
  };
}

export function orderRating(payload) {
  return {
    type: ORDER_RATING,
    payload,
  };
}

export function filterByPlatform(payload){
  return{
    type: FILTER_PLATFORM,
    payload
  }
}

