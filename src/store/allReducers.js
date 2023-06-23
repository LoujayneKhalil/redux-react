import { combineReducers } from "redux";
import postReducer from "../Posts/posts.reducer";

const reducers = combineReducers({
    postReducer,
})

export default reducers;