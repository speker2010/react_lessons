import React from 'react';

export default class UserInfo extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    Blog of {this.props.user.name}
                </div>
            </div>
            <div className="panel-body">
                <p>{this.props.user.username}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.phone}</p>
            </div>
        </div>;
    }
}