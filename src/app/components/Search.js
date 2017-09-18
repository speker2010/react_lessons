import React from 'react';

export default class Search extends React.Component
{
    render()
    {
        return <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for.." />
            <span className="input-group-btn">
               <button className="btn btn-default" type="button">Go!</button>
            </span>
        </div>;
    }
}