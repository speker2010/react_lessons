import React from 'react';
import BlogFlux from './BlogFlux';

export default class BlogFluxList extends React.Component {
    render() {
        if(!this.props.blogs.length){
            return null;
        }

        let blogs = this.props.blogs.map((blog, index) => {
            return <BlogFlux key={index} {...blog} />
        });

        return <div className="panel panel-default">
            {blogs}
        </div>
    }
}