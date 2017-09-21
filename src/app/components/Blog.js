import React from 'react';
import { Link } from 'react-router';

export default class Blog extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <Link to={`/blogs/${this.props.user.id}`}>Blog {this.props.user.name}</Link>
        </div>;
    }
}