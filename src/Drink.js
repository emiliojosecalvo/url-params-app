import React, { Component } from 'react';

export class Drink extends Component {
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.drinkName}`;
        return (
            <div>
                <h1>This is : {this.props.drinkName}</h1>
                <img style={{ width: '50%' }} src={url} alt={this.props.drinkName} />
            </div>
        )
    }
}

export default Drink;
