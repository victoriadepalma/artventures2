import { LIST_LOCATIONS_SUCCESS, LIST_OBRAS, LIST_TOURS_SUCCESS,LIST_ARTISTS_SUCCESS, LIST_OBRAS_SUCCESS, GET_TOUR_SUCCESS,LIST_OBRAS_TOUR_SUCCESS } from '../../constants'

  
  const INIT_STATE = {
    locations:[],
    tours:[],
    artists:[],
    obras:[],
    currentTour: undefined,
    currentObras: []
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LIST_LOCATIONS_SUCCESS: {
        return {
          ...state,
          locations:action.data
        };
      }
      case LIST_TOURS_SUCCESS: {
        return {
          ...state,
          tours:action.data
        };
      }
      case LIST_ARTISTS_SUCCESS: {
        return {
          ...state,
          artists:action.data
        };
      }
      case LIST_OBRAS_SUCCESS: {
        return {
          ...state,
          obras:action.data
        };
      }
      case GET_TOUR_SUCCESS: {
        return {
          ...state,
          currentTour:action.data
        };
      }
      case LIST_OBRAS_TOUR_SUCCESS: {
        return {
          ...state,
          currentObras:action.data
        };
      }
      default: {
        return state;
      }
    }
  };
  