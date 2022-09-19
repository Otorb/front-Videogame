import {
  GET_VIDEOGAME,
  GET_GENRES,
  GET_DETAIL,
  POST_VIDEOGAME,
  SEARCH_VIDEOGAME,
  FILTER_GENRES,
  FILTER_CREATE,
  ORDER_NAME,
  ORDER_RATING,
  FILTER_PLATFORM,
} from "../action/index";

const initialState = {
  videogame: [],
  allVideogame: [],
  genres: [],
  detail: [],
  platforms: [],
};

function reducer(state = initialState, action) {
  const allVideogame = state.allVideogame;
  switch (action.type) {
    case GET_VIDEOGAME:
      return {
        ...state,
        videogame: action.payload,
        allVideogame: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_VIDEOGAME:
      return {
        ...state,
        videogame: action.payload,
      };

    case FILTER_GENRES:
      if (action.payload === "all") {
        return {
          ...state,
          videogame: allVideogame,
        };
      }
      const filteredVideogame = allVideogame.filter((v) =>
        v.genres?.includes(action.payload)
      );
      return {
        ...state,
        videogame: filteredVideogame,
      };

    case FILTER_CREATE:
      if (action.payload === "created") {
        const dogsCreated = allVideogame.filter((v) => v.createInDb);

        return {
          ...state,
          videogame: dogsCreated,
        };
      }
      if (action.payload === "api") {
        const dogsFromApi = allVideogame.filter((v) => !v.createInDb);

        return {
          ...state,
          videogame: dogsFromApi,
        };
      }
      return {
        ...state,
        videogame: allVideogame,
      };
    case ORDER_NAME:
      if (action.payload === "asc") {
        const ascName = state.videogame.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });

        return {
          ...state,
          videogame: ascName,
        };
      }
      if (action.payload === "desc") {
        const descName = state.videogame.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (b.name < a.name) return -1;
          return 0;
        });

        return {
          ...state,
          videogame: descName,
        };
      }
      return {
        ...state,
        videogame: allVideogame,
      };

    case ORDER_RATING:
      if (action.payload === "ratiAsc") {
        const ascRating = state.videogame.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (b.rating > a.rating) return -1;
          return 0;
        });

        return {
          ...state,
          videogame: ascRating,
        };
      }
      if (action.payload === "ratiDesc") {
        const descwRating = state.videogame.sort((a, b) => {
          if (a.rating < b.rating) return 1;
          if (b.rating < a.rating) return -1;
          return 0;
        });

        return {
          ...state,
          videogame: descwRating,
        };
      }
      return {
        ...state,
        videogame: allVideogame,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
      };
    case FILTER_PLATFORM:
      if (action.payload === "All") {
        return {
          ...state,
          videogame: allVideogame,
        };
      }
      const filteredPlatform = allVideogame.filter((v) =>
        v.platforms?.includes(action.payload)
      );

      return {
        ...state,
        videogame: filteredPlatform,
      };

    default:
      return state;
  }
}

export default reducer;
