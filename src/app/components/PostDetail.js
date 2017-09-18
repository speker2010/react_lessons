import React from 'react';
import Comments from './Comments';
import PostDetailHeading from "./PostDetailHeading";
import PostDetailDate from "./PostDetailDate";
import PostDetailPicture from "./PostDetailPicture";
import PostDetailContent from "./PostDetailContent";

export default class PostDetail extends React.Component
{
    componentDidMount()
    {
        alert('Hello world');
    }

    render()
    {
        let postContent = <div>
                <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                    sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                    minus inventore?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos
                    iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                    Temporibus, voluptatibus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis
                    unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat
                    perspiciatis. Enim, iure!
                </p>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas
                    placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem
                    obcaecati?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo,
                    aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                    recusandae? Qui, necessitatibus, est!
                </p>
            </div>;

        return <div className="post-detail">
            <PostDetailHeading headline='Post title' authorName="Start bootstrap" authorLink="#"/>
            <PostDetailDate date='January 1, 2017 12:00'/>
            <PostDetailPicture src="http://placehold.it/900x300" alt="900 300" />
            <PostDetailContent content={postContent}/>
            <Comments/>
        </div>;
    }
}