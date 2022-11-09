import { combineReducers } from "redux";
import userReducer from "./userReducers";
import transactionsReducer from "./transactionsReducers";
import transferReducer from "./transferReducers";
import topupReducer from "./topupReducers";

const reducers = combineReducers({userReducer, transactionsReducer, transferReducer, topupReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;