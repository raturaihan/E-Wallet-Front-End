import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/indexReducers";
import applyMiddleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware));

export default store