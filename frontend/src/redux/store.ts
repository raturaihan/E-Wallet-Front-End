import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/indexReducers";
import applyMiddleware from './middleware'

const store = createStore(reducers, applyMiddleware);

export default store