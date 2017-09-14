import React from 'react';
import Menu from './Menu';
import Dev from './Dev';

export default class Footer extends React.Component
{
    render() {
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
            },
        ];
        return <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Menu items={items}/>
                    </div>
                    <div className="col-md-12">
                        <Dev/>
                    </div>
                </div>
            </div>
        </footer>;
    }
}