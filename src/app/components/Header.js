import React from 'react';
import Menu from './Menu';
import MenuTogler from './MenuTogler';
import Logo from './Logo';


export default class Header extends React.Component
{
    render(){
        let items = [
            {
                text: 'Home',
                link: '#'
            },
            {
                text: 'About',
                link: '#'
            },
            {
                text: 'Services',
                link: '#'
            },
            {
                text: 'Contacts',
                link: '#'
            }
        ];
        //jsx
        return <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <Logo brand={'navbar-brand'} />
                    <MenuTogler />
                    <Menu items={items}/>
                </div>
            </nav>;
    }
}