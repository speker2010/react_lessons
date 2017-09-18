import React from 'react';

export default class MenuItem extends React.Component
{
    render() {
        return <li className="nam-item"><a className="nav-link" href={this.props.link}>{this.props.text}</a></li>;
    }
}