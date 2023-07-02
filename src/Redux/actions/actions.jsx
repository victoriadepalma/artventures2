import { LIST_LOCATIONS_SUCCESS, LIST_LOCATIONS,LIST_ARTISTS,LIST_ARTISTS_SUCCESS,LIST_TOURS_SUCCESS,LIST_TOURS, LIST_OBRAS,LIST_OBRAS_SUCCESS, LOGIN, LIST_OBRAS_TOUR_SUCCESS, LIST_OBRAS_TOUR, GET_TOUR, GET_TOUR_SUCCESS, GET_RATING_TOUR_SUCCESS, GET_RATING_TOUR, LIST_USERS, LIST_USERS_SUCCESS, EDIT_PROFILE, EDIT_PROFILE_SUCCESS, RESERVE, RESERVE_SUCCESS, GET_RESERVA, GET_RESERVA_SUCCESS, RESET_RESERVA, GET_RESERVAS,GET_RESERVAS_SUCCESS, SEND_FEEDBACK, SEND_FEEDBACK_SUCCESS, EDIT_PROFILE_PIC_SUCCESS, EDIT_PROFILE_PIC, LIST_RESERVAS, LIST_RESERVAS_SUCCESS, ADD_ARTIST, ADD_ARTIST_SUCCESS, ADD_LOCATION, ADD_LOCATION_SUCCESS, ADD_OBRA, ADD_OBRA_SUCCESS, ADD_TOUR, ADD_TOUR_SUCCESS } from "../constants"

export const login = (data)=>{
    return {
        type: LOGIN,
        data
    }
}

export const listLocationsSuccess = (data)=>{
    return {
        type: LIST_LOCATIONS_SUCCESS,
        data
        
    }
}

export const listLocations = ()=>{
    return {
        type: LIST_LOCATIONS,
        
    }
}

export const listToursSuccess = (data)=>{
    return {
        type: LIST_TOURS_SUCCESS,
        data
        
    }
}

export const listTours = ()=>{
    return {
        type: LIST_TOURS,
        
    }
}

export const listArtistsSuccess = (data)=>{
    return {
        type: LIST_ARTISTS_SUCCESS,
        data
        
    }
}

export const getTour = (data)=>{
    return {
        type: GET_TOUR,
        data
        
    }
}

export const getTourSuccess = (data)=>{

    return {
        type: GET_TOUR_SUCCESS,
        data
        
    }
}

export const listArtists = ()=>{
    return {
        type: LIST_ARTISTS,
        
    }
}

export const listObrasSuccess = (data)=>{
    return {
        type: LIST_OBRAS_SUCCESS,
        data
        
    }
}

export const listObras = ()=>{
    return {
        type: LIST_OBRAS,
        
    }
}

export const listObrasTourSuccess = (data)=>{
    return {
        type: LIST_OBRAS_TOUR_SUCCESS,
        data
        
    }
}

export const listObrasTour = (data)=>{
    return {
        type: LIST_OBRAS_TOUR,
        data
        
    }
}

export const getRatingsSuccess = (data)=>{
    return {
        type: GET_RATING_TOUR_SUCCESS,
        data
        
    }
}

export const getRatings = (data)=>{
    return {
        type: GET_RATING_TOUR,
        data
        
    }
}

export const listUsers = ()=>{
    return {
        type: LIST_USERS,
        
    }
}

export const listUsersSuccess = (data)=>{
    return {
        type: LIST_USERS_SUCCESS,
        data
        
    }
}

export const editProfile = (data)=>{
    return {
        type: EDIT_PROFILE,
        data
    }
}

export const editProfileSuccess = (data)=>{
    return {
        type: EDIT_PROFILE_SUCCESS,
        data
        
    }
}

export const reserve = (data)=>{
    return {
        type: RESERVE,
        data
    }
}

export const reserveSuccess = (data)=>{
    return {
        type: RESERVE_SUCCESS,
        data
        
    }
}

export const getReserva = (data)=>{
    return {
        type: GET_RESERVA,
        data
    }
}

export const getReservaSuccess = (data)=>{
    return {
        type: GET_RESERVA_SUCCESS,
        data
        
    }
}

export const resetReserva = (data)=>{
    return {
        type: RESET_RESERVA,
        data
        
    }
}
export const getReservas = (data)=>{
    return {
        type: GET_RESERVAS,
        data
    }
}

export const getReservasSuccess = (data)=>{
    return {
        type: GET_RESERVAS_SUCCESS,
        data
        
    }
}

export const listReservas = (data)=>{
    return {
        type: LIST_RESERVAS,
        data
    }
}

export const listReservasSuccess = (data)=>{
    return {
        type: LIST_RESERVAS_SUCCESS,
        data
        
    }
}


export const sendFeedback = (data)=>{
    return {
        type: SEND_FEEDBACK,
        data
    }
}

export const sendFeedbackSuccess = (data)=>{
    return {
        type: SEND_FEEDBACK_SUCCESS,
        data
        
    }
}


export const editProfilePic = (data)=>{
    return {
        type: EDIT_PROFILE_PIC,
        data
    }
}

export const editProfilePicSuccess = (data)=>{
    return {
        type: EDIT_PROFILE_PIC_SUCCESS,
        data
        
    }
}

export const addArtist = (data)=>{
    return {
        type: ADD_ARTIST,
        data
    }
}

export const addArtistSuccess = (data)=>{
    return {
        type: ADD_ARTIST_SUCCESS,
        data
        
    }
}

export const addLocation = (data)=>{
    return {
        type: ADD_LOCATION,
        data
    }
}

export const addLocationSuccess = (data)=>{
    return {
        type: ADD_LOCATION_SUCCESS,
        data
        
    }
}

export const addObra = (data)=>{
    return {
        type: ADD_OBRA,
        data
    }
}

export const addObraSuccess = (data)=>{
    return {
        type: ADD_OBRA_SUCCESS,
        data
        
    }
}

export const addTour = (data)=>{
    return {
        type: ADD_TOUR,
        data
    }
}

export const addTourSuccess = (data)=>{
    return {
        type: ADD_TOUR_SUCCESS,
        data
        
    }
}



