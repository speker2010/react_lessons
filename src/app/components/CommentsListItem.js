import React from 'react';

export default class CommentsListItem extends React.Component
{
    render()
    {
        return <div className="media">
            <a href="#" className="pull-left">
                <img src={this.props.info.avatar} alt={this.props.info.commenterName} className="media-object"/>
            </a>
            <div className="media-body">
                <h5>{this.props.info.commenterName}</h5>
                {this.props.info.text}
                {this.props.children}
            </div>
        </div>;
    }
}