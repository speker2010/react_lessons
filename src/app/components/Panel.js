import React from 'react';

export default class Panel extends React.Component
{
    render() {
        return <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.header}</h3>
            </div>
            <div className="panel-body">
                {this.props.body}
            </div>
        </div>;
    }
}