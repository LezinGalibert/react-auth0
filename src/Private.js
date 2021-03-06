import React, { Component } from 'react';

class Private extends Component {
    state = {
        message: ""
    };

    componentDidMount() {
        fetch('/private', { headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` } }).then(response => {
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

export default Private;