import React, { Component } from 'react'

export default class Dependency extends Component {

    constructor() {
        super();
        this.state = {
            showUsers: false
        }
    }

    handleDeleteDependency = () => {
        this.props.onDelete(this.props.dependency);
    }

    handleEditDependency = () => {
        this.props.onEdit(this.props.dependency);
    }
    handleShowHideUsers = () => {
        this.setState({
            showUsers: !this.state.showUsers
        })
    }

    ShowUsersIfActivated = () => {
        const showTable = this.state.showUsers;
        if (showTable) {
            return (<div className="container">
                <h2>Users in {this.props.dependency.name}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Correo</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>El</td>
                        <td>Pepe</td>
                        <td>pepe@pepe.org.com</td>
                    </tr>
                </table>
            </div>);
        }
        return null;
    }

    render() {
        return (
            <>
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
                        <span className="col-3">
                            <button type="button" className="btn btn-primary" onClick={this.handleShowHideUsers}><i class="fa fa-users" aria-hidden="true"></i></button>
                        </span>
                    </td>
                </tr>
                <this.ShowUsersIfActivated />
            </>
        )
    }
}
