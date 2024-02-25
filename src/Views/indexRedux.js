import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

import DatesRedux from './Dates';

const stores = combineReducers({
    date: DatesRedux
})

export const store = createStore(stores, applyMiddleware(thunk));
