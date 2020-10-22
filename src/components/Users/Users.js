import React, { Component } from 'react';
import db from '../../config/firebase';
import User from './User';
import AddUser from './AddUser';
import {
    Box,

    CardContent,
    TextField,

} from '@material-ui/core';

export default class Users extends Component {

    constructor() {
        super();
        this.state = {
            search: '',
            filter: {
                dependency_id: ''
            },
            users: [],
            userToEdit: this.clearUser(),
            dependenciesQuery: [],
        }
    }


    refresh = async () => {
        let users = [];
        try {
            const query = await db.collection('users').get();
            users = query.docs.map(doc => doc.data());

            this.setState({
                users
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount = async () => {
        const query = await db.collection('dependencies').get();
        this.setState({
            dependenciesQuery: query.docs.map(doc => doc.data()),
        })
        this.refresh();
    }

    renderDependencyOptions = () => {
        let dependenciesOptions = this.state.dependenciesQuery.map(dependency => (<option value={dependency.id} key={dependency.id}>{dependency.name}</option>));
        return dependenciesOptions;
    }

    addUser = async (user) => {
        if (user.id === 0) {
            const date = new Date();
            user.id = date.getTime() + "";
        }
        try {
            const res = await db.collection('users').doc(user.id + '').set(user);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        this.setState({ userToEdit: this.clearUser() });
        this.refresh();
    }

    deleteUser = async (user) => {


        try {
            const res = await db.collection('users').doc(user.id + '').delete();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        this.refresh();
    }

    startEditUser = (user) => {
        this.setState({
            userToEdit: user,
        });
    }


    clearFields = () => {
        this.setState({
            userToEdit: this.clearUser()
        })
    }

    clearUser = () => {
        return {
            id: 0,
            name: "",
            lastName: "",
            email: "",
            password: "",
            valid_until: "",
            dependency: "",
            active: true,
        };
    }

    updateSearch = (text) => {
        this.setState({ search: text.target.value })
    }

    handleInputChange = (event) => {
        this.setState({
            filter: {
                dependency_id: event.target.value,
            } 
        })
    }

    render() {
        let filteredUsersByName = this.state.users.filter(
            (user) => {
                console.log(user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
                console.log(user.dependency.id);
                return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    &&( this.state.filter.dependency_id === '' || user.dependency.id === this.state.filter.dependency_id);
            }
        )
        return (

            <div>

                <Box  >

                    <CardContent>
                        <Box maxWidth={400}>
                            <TextField
                                fullWidth
                                value={this.state.search}
                                placeholder="Buscar Usuario por Nombre"
                                variant="outlined"
                                onChange={this.updateSearch}
                            />
                        </Box>
                    </CardContent>

                    <select className="form-control" id="dependency_id" value={this.state.filter.dependency_id} onChange={this.handleInputChange} noValidate>
                        <option value=''>Mostrar Todos</option>
                        {this.renderDependencyOptions()}
                    </select>

                </Box>
                <label>Dependencia</label>
                <div className="container">
                    <h3>Mira los usuarios!</h3>
                </div>
                <div className="container">
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
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsersByName.map(user => <User key={user.name} user={user}
                                onDelete={this.deleteUser} onEdit={this.startEditUser} manegeable={true} />)}
                        </tbody>
                    </table>
                </div>

                <div className="container">
                    <hr />
                    <AddUser handleNewUser={this.addUser} user={this.state.userToEdit} handleClearFields={this.clearFields} />

                </div>
            </div>
        )
    }
}
