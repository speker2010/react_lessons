import React from 'react';
import PostDetail from '../components/PostDetail';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
@connect((store)=>{
    return {
        is_fetching: store.posts.is_fetching,
        posts: store.posts.posts
    }
})
export default class Posts extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.props.dispatch(fetchPosts());
    }
    render()
    {
        if(this.props.is_fetching) return <div>Loading</div>;
        let posts = this.props.posts.map((post, index)=>{
            return <PostDetail post={post} key={index} />
        });
        return <div>{posts}</div>;
    }
}