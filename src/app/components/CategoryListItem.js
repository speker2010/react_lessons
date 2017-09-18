import React from 'react';

export default class CategoryListItem extends React.Component
{
    render() {
        return <li className="category-list__item"><a className="category-list__link" href={this.props.link}>{this.props.text}</a></li>;
    }
}