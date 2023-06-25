import { LIST_LOCATIONS_SUCCESS, LIST_LOCATIONS,LIST_ARTISTS,LIST_ARTISTS_SUCCESS,LIST_TOURS_SUCCESS,LIST_TOURS, LIST_OBRAS,LIST_OBRAS_SUCCESS, LOGIN } from "../constants"

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

