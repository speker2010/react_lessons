import React from 'react';
import Panel from './Panel';
import CategoryList from './CategoryList';
import Search from './Search';

export default class Sidebar extends React.Component
{
    render() {
        let categoryItems = [
            {
                text: 'Web design',
                link: '#'
            },
            {
                text: 'Html',
                link: '#'
            },
            {
                text: 'Css',
                link: '#'
            },
            {
                text: 'JavaScript',
                link: '#'
            },
            {
                text: 'Php',
                link: '#'
            },
            {
                text: 'Apache',
                link: '#'
            }
        ];
        let categoryList = <CategoryList items={categoryItems}/>;
        let search = <Search/>
        return <div>
            <Panel header="Search" body={search}/>
            <Panel header="Categories" body={categoryList}/>
            <Panel header="Site widget" body="You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!"/>
        </div>;
    }
}