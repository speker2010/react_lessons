import React from 'react';
import PostDetail from '../components/PostDetail';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';
@connect((store)=>{
    return {
        is_fetching: store.post.is_fetching,
        post: store.post.post
    }
})
export default class Post extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.props.dispatch(fetchPost(this.props.params.postId));
        console.log(this.props.params.postId, 'postId');
    }
    render()
    {
        if(this.props.is_fetching) return <div>Loading</div>;
        return <PostDetail post={this.props.post}/>;
    }
}