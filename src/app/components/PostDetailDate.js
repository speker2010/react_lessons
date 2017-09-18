import React from 'react';

export default class PostDetailDate extends React.Component
{
    render()
    {
        let date = new Date(this.props.date);
        let dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        let dateString = date.toLocaleString('en-US', dateOptions);
        return <div>
            <p>Posted on {dateString}</p>
            <hr/>
        </div>;
    }
}