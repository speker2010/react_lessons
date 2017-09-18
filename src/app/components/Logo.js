import React from 'react';

export default class Logo extends React.Component
{
    render()
    {
        return <a className="navbar-brand" href="/">
            {this.props.brand}
        </a>;
    }
}