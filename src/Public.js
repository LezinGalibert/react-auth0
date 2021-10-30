import React, { Component } from 'react';

class Public extends Component {
    state = {
        message: ""
    };

    componentDidMount() {
        fetch('/public').then(response => {
            if (response.ok) return response.json()
            throw Error("Network response failed");
        })
            .then(response => { this.setState({ message: response.message }) })
            .catch(err => this.setState({ message: err.message }))
    }
    render() {
        return (
            <p>{this.state.message}</p>
        );
    }
}

export default Public;