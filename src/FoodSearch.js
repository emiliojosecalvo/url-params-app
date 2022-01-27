import React, { Component } from 'react';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.handleChange = this.handleChange.bind();
    }
    handleChange(evt) {
        this.setState({ query: evt.target.value })
    }
    render() {
        return (
            <div>
                <input
                    placeholder='Food?'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default FoodSearch;
