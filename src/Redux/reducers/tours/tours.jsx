import { LIST_LOCATIONS_SUCCESS, LIST_OBRAS, LIST_TOURS_SUCCESS,LIST_ARTISTS_SUCCESS } from '../../constants'

  
  const INIT_STATE = {
    locations:[],
    tours:[],
    artists:[],
    obras:[]
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
      case LIST_OBRAS: {
        return {
          ...state,
          obras:action.data
        };
      }
      default: {
        return state;
      }
    }
  };
  