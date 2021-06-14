import {ERROR_NAME, LOADING_NAME, SET_NAME, USER_INFO_REQUEST, USER_INFO_SUCCESS} from "../type";
import axios from "axios"

export const setInfo = (c) => async dispatch => {

    await dispatch({type: LOADING_NAME});
    await axios.get('https://jsonplaceholder.typicode.com/todos/' + c)
        .then(response => dispatch({type: SET_NAME, payload: response.data})).catch(err => dispatch({
            type: ERROR_NAME,
            payload: err
        }))

}

export const userInfoData = (data) => async dispatch => {
    await dispatch({type: USER_INFO_REQUEST});
    await dispatch({type: USER_INFO_SUCCESS, payload: data});
}