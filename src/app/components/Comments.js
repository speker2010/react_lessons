import React from 'react';
import Panel from "./Panel";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default class Comments extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            class: ''
        }
    }
    componentDidMount()
    {
        let _this = this;
        $(window).on('showForm', function () {
            _this.setState({class: 'comments_visible_hidden'});
        });
    }

    render()
    {
        let form = <CommentsForm/>;
        let comments = [
            {
                avatar: 'http://placehold.it/64x64',
                commenterName: 'Commenter Name',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.' +
                ' Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi' +
                ' vulputate fringilla. Donec lacinia congue felis in faucibus.',
                children: [
                    {
                        avatar: 'http://placehold.it/64x64',
                        commenterName: 'Commenter Name',
                        text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.' +
                        ' Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi' +
                        ' vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    }
                ]
            },
            {
                avatar: 'http://placehold.it/64x64',
                commenterName: 'Commenter Name',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.' +
                ' Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi' +
                ' vulputate fringilla. Donec lacinia congue felis in faucibus.',
            },
            {
                avatar: 'http://placehold.it/64x64',
                commenterName: 'Commenter Name',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.' +
                ' Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi' +
                ' vulputate fringilla. Donec lacinia congue felis in faucibus.',
            }

        ];
        return <div className={this.state.class}>
            <Panel header="Leave comment" body={form}/>
            <CommentsList list={comments}/>
        </div>;
    }
}