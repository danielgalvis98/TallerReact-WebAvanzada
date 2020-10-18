import React, { Component } from 'react'

export default class Dependency extends Component {

    handleDeleteDependency = () => {
        this.props.onDelete(this.props.dependency);
    }

    handleEditDependency = () => {
        this.props.onEdit(this.props.dependency);
    }

    render() {
        return (
            <tr>
                <td>{this.props.dependency.name}</td>
                <td>{this.props.dependency.coordinator}</td>
                <td>{this.props.dependency.max_users}</td>
                <td>{this.props.dependency.location}</td>
                <td>{this.props.dependency.active ? "Sí" : "No"}</td>
                <td>
                    <span className="col-3">
                        <button type="button" className="btn btn-danger" onClick={this.handleDeleteDependency}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </span>
                    <span className="col-3">
                        <button type="button" className="btn btn-primary" onClick={this.handleEditDependency}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    </span>
                </td>
            </tr>
        )
    }
}
