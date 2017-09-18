import React from 'react';
import CommentsListItem from './CommentsListItem'

export default class CommentsList extends React.Component
{
    render() {
        let result = this.expandList(this.props.list);
        return <div>
            {result}
        </div>;
    }

    expandList(list)
    {
        let result = [];
        for(let i=0; i < list.length; i++) {
            let children = '';
            //console.log(list[i].children, 'children');
            if (typeof (list[i].children) !== 'undefined') {
                children = this.expandList(list[i].children);
            }
            result.push(<CommentsListItem key={i} info={list[i]} children={children} />);
        }
        return result;
    }
}