import React from 'react';

export default class PostDetailPicture extends React.Component
{
    render()
    {
        return <div>
            <figure>
                <img className="img-responsive" src={this.props.src} alt={this.props.alt}/>
            </figure>
            <hr/>
        </div>;
    }
}