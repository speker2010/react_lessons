import React from 'react';

export default class CommentsForm extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.state = {
            formHidden: true
        }
    }

    render()
    {
        if(this.state.formHidden === true) {
            return <button className="btn btn-primary" onClick={()=>{
                this.setState({formHidden: false});
                $(window).trigger('showForm');
            }}>Show form</button>;
        }
        return <form action="" name="comments">
            <div className="form-group">
                <textarea class="form-control" name="" id="" cols="30" rows="3"></textarea>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>;
    }
}