import React, { Component } from 'react'
import User from '../Users/User';
import db from '../../config/firebase';

export default class Dependency extends Component {

    constructor() {
        super();
        this.state = {
            showUsers: false,
            users: [],
        }
    }

    handleDeleteDependency = () => {
        if (this.state.users.length > 0){
            alert('No se puede eliminar la dependencia: Hay usuarios asociados');
        } else {
            this.props.onDelete(this.props.dependency);
        }
    }

    handleEditDependency = () => {
        this.props.onEdit(this.props.dependency);
    }
    handleShowHideUsers = () => {
        this.setState({
            showUsers: !this.state.showUsers
        })
    }

    usersByDependencies = async () => {
        const thisDependency = db.collection("dependencies").doc(this.props.dependency.id);
        console.log(thisDependency);
        const usersQuery = await db.collection("users").where("dependency", "==", thisDependency).get();
        const users = usersQuery.docs.map(user => user.data());
        return users;
    }

    componentDidMount = async() => {
        const users = await this.usersByDependencies();
        this.setState({
            users
        });
    }

    renderUsers = () => {
        console.log(this.state.users);
        let usersTable = this.state.users.map(user => <User key={user.name} user={user}
            manegeable={false}/>);
        return usersTable;
    }

    ShowUsersIfActivated = () => {
        if (this.state.showUsers) {
            return (<div className="container">
                <h2>Users in {this.props.dependency.name}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Dependencia</th>
                            <th scope="col">Valido Hasta</th>
                            <th scope="col">Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
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
                            <button type="button" className="btn btn-primary" onClick={this.handleShowHideUsers}><i className="fa fa-users" aria-hidden="true"></i></button>
                        </span>
                    </td>
                </tr>
                <this.ShowUsersIfActivated />
            </>
        )
    }
}
