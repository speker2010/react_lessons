import React from 'react';
import Menu from './Menu';
import Dev from './Dev';

export default class Footer extends React.Component
{
    render() {
        return <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center main-footer__copy">
                        <Dev/>
                    </div>
                </div>
            </div>
        </footer>;
    }
}