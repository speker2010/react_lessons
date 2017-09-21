import React from 'react';
import PostSnippet from './PostSnippet';

export default class BlogDetail extends React.Component
{
    render()
    {
        let postsList = this.props.blog.map(function (post, index) {
            return <PostSnippet post={post} key={index}/>;
        });
        return <div>{postsList}</div>;
    }
}