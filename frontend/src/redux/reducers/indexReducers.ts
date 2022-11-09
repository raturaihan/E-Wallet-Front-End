import { combineReducers } from "redux";
import userReducer from "./userReducers";

const reducers = combineReducers({userReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;