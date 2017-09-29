import * as Posts from '../constants/postsConstants';

export function postsReducers(state = {posts: [], post: [], is_fetching:false}, action) {
    switch (action.type)
    {
        case Posts.FETCH_POSTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }
        case Posts.FETCH_POSTS_FULFILLED: {
            state = {...state, is_fetching: false, posts: action.payload.data};
            break;
        }
        case Posts.FETCH_POST_REJECT: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}