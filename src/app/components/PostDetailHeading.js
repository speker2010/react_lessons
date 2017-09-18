import React from 'react';

export default class PostDetailHeading extends React.Component
{
    render()
    {
        return <div>
            <h1>{this.props.headline}</h1>
            <p>by <a href={this.props.authorLink}>{this.props.authorName}</a></p>
            <hr/>
        </div>;
    }
}