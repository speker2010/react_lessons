import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/layouts/Main';
import Index from './app/pages/Index';
import Blogs from './app/pages/Blogs';
import Blog from './app/pages/Blog';
import NotFound from './app/pages/NotFound';
import Comments from './app/pages/Comments';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import BlogsFlux from './app/components/BlogsFlux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './app/stores/store';

/*
На сайте с json нет привязки к комментариям по userId, поэтому последние два задания не далал. Причем одно из них уже
отчасти реализовано в pages/blog, а именно там отображается инфо юзера и все его посты, а на pages/blogs
выводятся по сути списки пользователей, но я это назвал блогами, потому что ссылки с этой страницы ведут на старницу
с записями выбранного пользователя
 */

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Index}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/posts/:postId" component={Post}/>/*Не знаю почему но когда вкладывал внуть Route path='/posts/', то не срабатывало*/
                <Route path="/blogs" component={Blogs}>
                    <Route path=":blogId" component={Blog}/>
                </Route>
                <Route path="/blogs-flux" component={BlogsFlux}/>
                <Route path="/comments" component={Comments}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    app);
