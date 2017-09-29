import React from 'react';
import { Link } from 'react-router';

export default class PostDetail extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title"><Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></div>
            </div>
            <div className="panel-body">
                <p>{this.props.post.body}</p>
                <Link to={`/blogs/${this.props.post.userId}`}>To blog</Link>
            </div>
        </div>
    }
}