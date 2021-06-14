import {initialStateArrayTest} from "../../../../redux/reducers/initialStateArrayTest";
import {TEST_DATA_FAIL, TEST_DATA_REQUEST, TEST_DATA_SUCCESS} from "../type";

export const testReduxReducer = (state = initialStateArrayTest, action) => {
    switch (action.type) {
        case TEST_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TEST_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case TEST_DATA_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}