import { LIST_LOCATIONS_SUCCESS, LIST_OBRAS, LIST_TOURS_SUCCESS,LIST_ARTISTS_SUCCESS, LIST_OBRAS_SUCCESS, GET_TOUR_SUCCESS,LIST_OBRAS_TOUR_SUCCESS, GET_RATING_TOUR_SUCCESS, RESERVE_SUCCESS, GET_RESERVA_SUCCESS, RESET_RESERVA, GET_RESERVAS_SUCCESS, LIST_RESERVAS_SUCCESS, LIST_RATINGS_SUCCESS, GET_CONTRIBUCION_SUCCESS, LIST_CONTRIBUCIONES, LIST_CONTRIBUCIONES_SUCCESS } from '../../constants'

  
  const INIT_STATE = {
    locations:[],
    tours:[],
    artists:[],
    obras:[],
    ratings:[],
    contribuciones:[],
    misReservas:[],
    reservas:[],
    currentTour: undefined,
    currentPayment:undefined,
    currentObras: [],
    currentRatings:[],
    currentReserva:undefined
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
      case GET_RATING_TOUR_SUCCESS: {
        return {
          ...state,
          currentRatings:action.data
        };
      }
      case RESERVE_SUCCESS: {
        return {
          ...state,
          currentReserva:{id: action.data}
        };
      }
      case GET_RESERVA_SUCCESS: {

        return {
          ...state,
          currentReserva:action.data
        };
      }
      case GET_RESERVAS_SUCCESS: {
        return {
          ...state,
          misReservas:action.data
        };
      }
      case RESET_RESERVA: {
        return {
          ...state,
          currentReserva:undefined
        };
      }
      case RESET_RESERVA: {
        return {
          ...state,
          currentReserva:undefined
        };
      }
      case LIST_RESERVAS_SUCCESS: {
        return {
          ...state,
          reservas:action.data
        };
      }
      case LIST_RATINGS_SUCCESS: {
        return {
          ...state,
          ratings:action.data
        };
      }

      case GET_CONTRIBUCION_SUCCESS: {
        return {
          ...state,
          currentPayment:action.data
        };
      }
      case LIST_CONTRIBUCIONES_SUCCESS: {
        console.log("jjj",action.data)
        return {
          ...state,
          contribuciones:action.data
        };
      }
      // case RESET_RESERVA: {
      //   return {
      //     ...state,
      //     currentReserva:undefined
      //   };
      // }
      default: {
        return state;
      }
    }
  };
  