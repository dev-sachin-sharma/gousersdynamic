import {ActionTypes} from '../Types/action-types'


export const setAllUser =(users) =>{
    return {
        type : ActionTypes.SET_ALL_USER,
        payload : users
    }
}
export const setSingleUser =(user) =>{
    return {
        type : ActionTypes.SET_SINGLE_USER,
        payload : user
    }
}