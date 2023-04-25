import * as types from "./actiontype";
import axios from 'axios'

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USERS
});

const userAdded = () => ({
    type: types.ADD_USER
});

const userUpdated = () => ({
    type: types.UPDATE_USER
});

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
});

export const loadUser = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
            .then(resp => {
                dispatch(getUsers(resp.data));
                console.log('response', resp);
            }).catch(error => console.log(error))
    }
}


export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
            .then(resp => {
                console.log(resp);
                dispatch(userDeleted());
                dispatch(loadUser());
            }).catch(error => console.log(error));
    }
}


export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user)
            .then(resp => {
                console.log(resp);
                dispatch(userAdded());
                dispatch(loadUser());
            }).catch(error => console.log(error));
    }
}


export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then(resp => {
                console.log(resp);
                dispatch(getUser(resp.data));
                dispatch(loadUser());
            }).then(error => console.log(error));
    }
}

export const UpdateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
            .then(resp => {
                console.log(resp);
                dispatch(userUpdated());
                dispatch(loadUser());
            }).catch(error => console.log(error));
    }
}