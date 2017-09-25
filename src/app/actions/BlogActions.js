import dispatcher from '../dispatcher';
import {ADD_BLOG, DELETE_BLOG, UPDATE_BLOG, FETCH_BLOGS_START} from '../constants/BlogConstants';

export function addBlog({userId, title, body}) {
    const blog = {userId, title, body};
    dispatcher.dispatch({
        type: ADD_BLOG,
        payload: blog
    })
}

export function updateBlog({blogIndex, userId, title, body}) {
    const blog = {blogIndex, userId, title, body};
    dispatcher.dispatch({
        type: UPDATE_BLOG,
        payload: blog
    });
}

export function deleteBlog(blogIndex) {
    dispatcher.dispatch({
        type: DELETE_BLOG,
        payload: blogIndex
    });
}

export function fetchBlogs() {
    dispatcher.dispatch({
        type: FETCH_BLOGS_START
    });
}