import React from 'react';
import MenuItem from './MenuItem';

export default class MenuList extends React.Component
{
    render() {
        let menuItems = this.props.items.map((item, index) => {
           return <MenuItem
               text={item.text}
               link={item.link}
               key={index}
           />
        });
        //jsx
        return <ul className="nav navbar-nav navbar-right">{menuItems}</ul>;
    }
}