import React, { Component } from 'react';

export class Food extends Component {
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.foodName}`;
        return (
            <div>
                <h1>This is : {this.props.foodName}</h1>
                <img style={{ width: '50%' }} src={url} alt={this.props.foodName} />
            </div>
        )
    }
}

export default Food;