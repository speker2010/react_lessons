import React from 'react';

export default class CategoryListItem extends React.Component
{
    render() {
        return <li><a href={this.props.link}>{this.props.text}</a></li>;
    }
}