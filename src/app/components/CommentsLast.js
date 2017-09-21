import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class CommentsLast extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            comments: []
        };
        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then((response)=>{
                let { data } = response;
                this.setState({
                    comments: data
                });
            });
    }

    render()
    {
        if(!this.state.comments.length) return null;
        let comments = this.state.comments.map(function (comment, index) {
            return <Comment comment={comment} key={index}/>;
        });
        return <div>{comments}</div>;
    }
}