import React from 'react';
import MenuList from './MenuList';

export default class Menu extends React.Component
{
    render(){
        //jsx
        return <MenuList items={this.props.items}/>;
    }
}