import React from 'react';
import { Link } from 'react-router';

export default class BlogFlux extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/users/${this.props.userId}`}>
                        Ссылка на автора
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{this.props.body}</p>
            </div>
        </div>
    }
}