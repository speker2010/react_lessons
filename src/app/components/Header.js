import React from 'react';
import Menu from './Menu';
import MenuTogler from './MenuTogler';
import Logo from './Logo';

export default class Header extends React.Component
{


    render(){
        let items = [
            {
                link: '/',
                text: 'Home'
            },
            {
                link: '/blogs',
                text: 'Blogs'
            },
            {
                link: '/comments',
                text: 'Comments'
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