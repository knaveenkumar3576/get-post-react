import * as actionTypes from './actionTypes'
import axios from '../HOC/axios-handler'


export const setUsers=(userList)=> {
    return {
        type: actionTypes.SET_USERS,
        users: userList
    }
}    

export const setInitialState = ()=> {
    return dispatch => {
        axios.get('/users')
        .then(response => {
            dispatch(setUsers(response.data));
        })
    }
}