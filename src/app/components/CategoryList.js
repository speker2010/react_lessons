import React from 'react';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends React.Component
{
    render() {
        let categoryListItem = this.props.items.map(function (item, index) {
            return <CategoryListItem
                link={item.link}
                text={item.text}
                key={index}
            />;
        });
        return <ul>
            {categoryListItem}
        </ul>;
    }
}