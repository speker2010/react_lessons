import React from 'react';

export default class PostSnippet extends React.Component
{
    render()
    {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    {this.props.post.title}
                </div>
            </div>
            <div className="panel-body">
                {this.props.post.body}
            </div>
        </div>
    }
}