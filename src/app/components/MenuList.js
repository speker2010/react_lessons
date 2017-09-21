import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router';

export default class MenuList extends React.Component
{
    isActive(href)
    {
        return window.location.pathname === href;
    }
    render() {
        let menuItems = this.props.items.map((item, index) => {
           return <MenuItem
               link={<Link to={item.link}>{item.text}</Link>}
               active={this.isActive(item.link)}
               key={index}
           />
        });
        //jsx
        return <ul className="nav navbar-nav navbar-right">{menuItems}</ul>;
    }
}