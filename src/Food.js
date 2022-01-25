import React, { Component } from 'react';

export default class Food extends Component {
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div>
                <h1>This is : {this.props.name}</h1>
                <img style={{ width: '50%' }} src={url} />
            </div>
        )
    }
}