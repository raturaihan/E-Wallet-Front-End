import { combineReducers } from "redux";
import userReducer from "./userReducers";
import transactionsReducer from "./transactionsReducers";

const reducers = combineReducers({userReducer, transactionsReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;