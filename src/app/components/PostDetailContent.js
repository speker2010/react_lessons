import React from 'react';

export default class PostDetailContent extends React.Component
{
    render()
    {
        return <div>
            {this.props.content}
            <hr/>
        </div>;
    }
}