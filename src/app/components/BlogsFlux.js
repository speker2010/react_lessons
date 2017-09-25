import React from 'react';
import BlogStore from '../stores/BlogStore';
import {addBlog, fetchBlogs, updateBlog, deleteBlog} from '../actions/BlogActions';
import BlogFluxList from './BlogFluxList';

/**
 * Не знаю почему, но кажется в задании блогами называют посты, исходя из этого я и делал задание
 */
export default class BlogsFlux extends React.Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            blogs: []
        };

        this.newBlog = this.newBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.onBlogChange = this.onBlogChange.bind(this);
    }

    newBlog()
    {
        let body = 'Новый блог';
        let userId = 1;
        let title = 'Название блога';
        addBlog({userId, title, body});
    }

    updateBlog()
    {
        let blogIndex = 1;
        let userId = 1;
        let title = 'Название обновленного блога';
        let body = 'Обновленное содержание';
        updateBlog({blogIndex, userId, title, body});
    }

    deleteBlog()
    {
        let blogIndex = 2;
        deleteBlog(blogIndex);
    }

    onBlogChange(blogs)
    {
        this.setState({
            blogs
        });
    }

    componentWillMount(){
        BlogStore.on('change', this.onBlogChange);
    }

    componentDidMount()
    {
        fetchBlogs();
    }

    componentWillUnmount()
    {
        BlogStore.removeListener('change', this.onBlogChange);
    }

    render()
    {
        return (
            <div>
                <button type="button" className="btn btn-primary"
                        onClick={this.newBlog}
                >Добавить новый блог</button>
                <button type="button" className="btn btn-primary" onClick={this.updateBlog}>
                    Обновить 2 блог
                </button>
                <button type="button" className="btn btn-primary" onClick={this.deleteBlog}>
                    Удалить 3 блог
                </button>
                <BlogFluxList blogs={this.state.blogs} />
            </div>
        );
    }
}