import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './app/layouts/MainPage';
import PostDetail from './app/components/PostDetail';

const app = document.getElementById('app');

ReactDOM.render(
    <MainPage>
        <PostDetail/>
    </MainPage>,
app);