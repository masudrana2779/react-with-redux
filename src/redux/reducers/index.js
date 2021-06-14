import {combineReducers} from "redux";
import {nameReducer, userInfoReducer} from "../../components/redux/reducer";
import {testReduxReducer} from "../../components/testRedux/redux/reducer";

export default combineReducers({
    nameReducer,
    userInfoReducer,
    testReduxReducer
})