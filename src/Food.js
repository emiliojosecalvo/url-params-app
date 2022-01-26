import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export default class Food extends Component {
    render() {
        const { name } = useParams();
        console.log(name);
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div>
                <h1>This is : {this.props.name}</h1>
                <img style={{ width: '50%' }} src={url} />
            </div>
        )
    }
}