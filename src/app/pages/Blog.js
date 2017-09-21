import React from 'react';
import BlogDetail from "../components/BlogDetail";
import axios from 'axios';
import UserInfo from "../components/UserInfo";

export default class Blog extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            blog: [],
            user: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.params.blogId}`)
            .then((response)=>{
                let { data } = response;
                this.setState({
                    blog: data
                });
            });
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.blogId}`)
            .then((response)=>{
                let { data } = response;
                this.setState({
                    user: data
                });
            });

    }

    render()
    {
        if (!this.state.blog.length) return null;
        if (!this.state.user) return null;
        return <div>
            <UserInfo user={this.state.user}/>
            <BlogDetail blog={this.state.blog}/>
        </div>;
    }
}