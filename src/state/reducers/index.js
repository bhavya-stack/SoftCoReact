import { combineReducers } from "redux";
import { responceReducer } from "../reducers/responceReducer";

const reducers = combineReducers({
    responceData : responceReducer
})

export default reducers;