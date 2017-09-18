import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default class MainPage extends React.Component
{
    constructor() {
        super(...arguments);
        this.state = {
            counter: 0
        }
    }
    render() {
        const test = React.createElement('h1', {}, 'My First React Code');
        return <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        {this.props.children}
                    </main>
                    <aside className="col-md-4">
                        <Sidebar/>
                    </aside>
                </div>
            </div>
            <Footer/>
        </div>;
    }
}