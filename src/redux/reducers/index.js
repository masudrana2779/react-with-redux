import {combineReducers} from "redux";
import {nameReducer, userInfoReducer} from "../../components/redux/reducer";

export default combineReducers({
    nameReducer,
    userInfoReducer
})