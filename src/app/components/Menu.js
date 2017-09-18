import React from 'react';
import MenuList from './MenuList';

export default class Menu extends React.Component
{
    render(){
        //jsx
        return <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <MenuList items={this.props.items}/>
        </div>;
    }
}