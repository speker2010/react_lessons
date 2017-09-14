import React from 'react';
import Menu from './Menu';
import Login from './Login';
import LoginModal from './LoginModal';

export default class Header extends React.Component
{
    render(){
        let items = [
            {
                text: 'Ссылка 1',
                link: '#'
            },
            {
                text: 'Ссылка 2',
                link: '#'
            },
            {
                text: 'Ссылка 3',
                link: '#'
            }
        ];
        //jsx
        return <header>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <Menu items={items}/>
                    <div className="navbar-text navbar-right">
                        <Login/>
                    </div>
                </div>
            </nav>
            <LoginModal/>
        </header>;
    }
}