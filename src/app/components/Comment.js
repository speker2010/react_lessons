import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    <Link to={`/posts/${this.props.comment.postId}`}>{this.props.comment.name}</Link>
                </div>
            </div>
            <div className="panel-body">
                <p>{this.props.comment.body}</p>
                <p>{this.props.email}</p>
            </div>
        </div>
    }
}