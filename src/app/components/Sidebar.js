import React from 'react';
import Panel from './Panel';
import CategoryList from './CategoryList';

export default class Sidebar extends React.Component
{
    render() {
        let categoryItems = [
            {
                text: 'Категория 1',
                link: '#'
            },
            {
                text: 'Категория 2',
                link: '#'
            },
            {
                text: 'Категория 3',
                link: '#'
            }
        ];
        let categoryList = <CategoryList items={categoryItems}/>;
        return <div>
            <Panel header="Панель" body="Содержимое панели"/>
            <Panel header="Панель" body={categoryList}/>
            <Panel header="Панель" body="Содержимое панели"/>
        </div>;
    }
}