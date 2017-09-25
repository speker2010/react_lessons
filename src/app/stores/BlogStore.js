import { EventEmitter } from 'events';
import {
    ADD_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG,
    FETCH_BLOGS_START,
    FETCH_BLOGS_END
} from '../constants/BlogConstants';
import dispatcher from '../dispatcher';
import axios from 'axios';

class BlogStore extends EventEmitter
{
    constructor()
    {
        super(...arguments);

        this.blogs = [];

        this.fetchBlogsStart = this.fetchBlogsStart.bind(this);
        this.fetchBlogsEnd = this.fetchBlogsEnd.bind(this);
        this.change = this.change.bind(this);
        this.getBlogs = this.getBlogs.bind(this);
        this.addBlog = this.addBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchBlogsStart(){
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                let {data} = response;

                dispatcher.dispatch({
                    type: FETCH_BLOGS_END,
                    payload: data
                });
            });
    }

    fetchBlogsEnd(blogs)
    {
        this.blogs = blogs;
        this.change();
    }

    change()
    {
        this.emit('change', this.blogs);
    }

    getBlogs()
    {
        return this.blogs;
    }

    addBlog(blog)
    {
        this.blogs.push(blog);
        this.change();
    }

    deleteBlog(blogIndex)
    {
        console.log(blogIndex);
        this.blogs.splice(blogIndex, 1);
        this.change();
    }

    updateBlog(blog)
    {
        if (typeof this.blogs[blog.blogIndex] === 'undefined') return null;
        this.blogs[blog.blogIndex] = blog;
        this.change();
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_BLOG: {
                this.addBlog(action.payload);
                break;
            }
            case  FETCH_BLOGS_START: {
                this.fetchBlogsStart();
                break;
            }
            case FETCH_BLOGS_END: {
                this.fetchBlogsEnd(action.payload);
                break;
            }
            case UPDATE_BLOG: {
                this.updateBlog(action.payload);
                break;
            }
            case DELETE_BLOG: {
                this.deleteBlog(action.payload);
                break;
            }
        }
    }
}

const bS = new BlogStore;
dispatcher.register(bS.handleActions);
export default bS;