import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { postReducers } from '../reducers/postReducer';
import { postsReducers } from '../reducers/postsReducer';

const middleware = applyMiddleware(promise(), logger());
const reduser = combineReducers({
    post: postReducers,
    posts: postsReducers
});

const store = createStore(reduser, middleware);

export default store;