import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default class MainPage extends React.Component
{
    render() {
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