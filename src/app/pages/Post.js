import React from 'react';
import PostDetail from '../components/PostDetail';
import axios from 'axios';

export default class Post extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            post: null
        };
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response)=>{
                let { data } = response;
                this.setState({
                    post: data
                });
            });
    }
    render()
    {
        if(!this.state.post) return <div>No posts</div>;
        return <PostDetail post={this.state.post}/>;
    }
}