import {ERROR_NAME, LOADING_NAME, SET_NAME, USER_INFO_FAILURE, USER_INFO_REQUEST, USER_INFO_SUCCESS} from "../type";
import {initialState} from "../../../redux/reducers/initialState";
import {initialStateArray} from "../../../redux/reducers/initialStateArray";

export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_NAME:
            return {
                ...state,
                loading: true
            };
        case SET_NAME:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case ERROR_NAME:
            return {
                loading: false,
                data: {},
                error: action.payload
            }

        default:
            return state
    }

}


export const userInfoReducer = (state = initialStateArray, action) => {

    switch (action.type) {

        case USER_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_INFO_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ""
            }
        case USER_INFO_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}