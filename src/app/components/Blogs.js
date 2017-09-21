import React from 'react';
import axios from 'axios';
import Blog from "./Blog";

export default class Blogs extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            blogs: []
        };

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                (response)=>{
                    let { data } = response;

                    this.setState({
                        blogs: data
                    })
                }
            )
    }

    render()
    {
        if (!this.state.blogs.length)
            return <div>
                No blogs
            </div>;

        let blogs = this.state.blogs.map(function (user, index) {
            return <Blog key={index} user={user}/>;
        });

        return <div>
            {blogs}
        </div>;
    }
}