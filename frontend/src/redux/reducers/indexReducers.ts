import { combineReducers } from "redux";
import userReducer from "./userReducers";
import transactionsReducer from "./transactionsReducers";
import transferReducer from "./transferReducers";

const reducers = combineReducers({userReducer, transactionsReducer, transferReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;