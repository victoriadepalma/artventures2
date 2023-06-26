import { LIST_LOCATIONS_SUCCESS, LIST_LOCATIONS,LIST_ARTISTS,LIST_ARTISTS_SUCCESS,LIST_TOURS_SUCCESS,LIST_TOURS, LIST_OBRAS,LIST_OBRAS_SUCCESS, LOGIN, LIST_OBRAS_TOUR_SUCCESS, LIST_OBRAS_TOUR, GET_TOUR, GET_TOUR_SUCCESS, GET_RATING_TOUR_SUCCESS, GET_RATING_TOUR, LIST_USERS, LIST_USERS_SUCCESS } from "../constants"

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

