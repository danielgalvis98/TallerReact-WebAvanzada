import React, { Component } from 'react'

export default class Dependency extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.dependency.name}</td>
                <td>{this.props.dependency.coordinator}</td>
                <td>{this.props.dependency.max_users}</td>
                <td>{this.props.dependency.location}</td>
                <td>{this.props.dependency.active ? "Sí":  "No"}</td>
            </tr>
        )
    }
}
