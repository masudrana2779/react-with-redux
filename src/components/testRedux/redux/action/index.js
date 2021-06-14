import {TEST_DATA_FAIL, TEST_DATA_REQUEST, TEST_DATA_SUCCESS} from "../type";
import axios from "axios";


export const setDataFromAPI = (id,data) => async dispatch => {
    console.log(id,222)
    await dispatch({type: TEST_DATA_REQUEST});
    await dispatch({type: TEST_DATA_SUCCESS, payload:data })
}