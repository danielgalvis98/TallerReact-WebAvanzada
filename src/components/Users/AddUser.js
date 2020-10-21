import React, { Component } from 'react';

export default class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            lastName: "",
            email: "",
            password: "",
            dependency: "",
            valid_until: "",
            active: true,
            errors: {
                name: 'El nombre es obligatorio',
                lastName: 'El apellido es obligatorio',
                email: 'El email es obligatorio',
                password: 'La contraseña es obligatoria',
                dependency: 'La dependencia es obligatoria',
                valid_until: 'Este campo es obligatorio',
                
            }
        };
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log(nextProps.user.id);
        if (nextProps.user.id !== prevState.id) {
            return {
                id: nextProps.user.id,
                name: nextProps.user.name,
                lastName: nextProps.user.lastName,
                email: nextProps.user.email,
                password: nextProps.user.password,
                dependency: nextProps.user.dependency,
                valid_until: nextProps.user.valid_until,
                active: nextProps.user.active,
                errors: {
                    name: nextProps.user.name === '' ? 'El nombre es obligatorio' : '',
                    lastName: nextProps.user.lastName === '' ? 'El apellido es obligatorio':'',
                    email: nextProps.user.email === '' ? 'El email es obligatorio':'',
                    password: nextProps.user.password === '' ? 'La contraseña es obligatoria': '',
                    dependency: nextProps.user.dependency === '' ? 'La dependencia es obligatoria':'',
                    valid_until: nextProps.user.valid_until === '' ? 'Este campo es obligatorio': '',
                }
            }
        }
        return null;
    }

    validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    };

    handleInputChange = (event) => {
        event.preventDefault();
        let errors = this.state.errors;
        const { id, value } = event.target;
        switch (id) {
            case 'name':
                errors.name =
                    value === '' ? 'El nombre es obligatorio' : '';
                break;
            case 'lastName':
                errors.lastName =
                    value === '' ? 'El apellido es obligatorio' : '';
                break;
            case 'email':
                errors.email =
                value === '' ? 'El email es obligatorio' : '';
                break;
            case 'password':
                errors.password =
                value === '' ? 'La contraseña es obligatoria' : '';
                break;

            case 'dependency':
              errors.dependency =
              value === '' ? 'La dependencia es obligatoria' : '';
              break;
            case 'valid_until':
              errors.valid_until =
              value === '' ? 'Este campo es obligatorio' : '';
              break;
            default:
                break;
        }
        this.setState({ [id]: value, errors });
    }

    handleBoxChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.checked });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            if (this.state.id === 0) {
                this.setState({ id: 1 });
            }
            const { errors, ...toAdd } = this.state;

            this.props.handleNewUser(toAdd);
        }
    }

    ShowClearButton = () => {
        if (this.state.id !== 0) {
            return <button type="button" className="btn btn-primary" onClick={this.props.handleClearFields}>Cancel Edit</button>
        }
        return null;
    }

    render() {
        const errors = this.state.errors;
        return (
            <div>
                <div className="container">
                    <h3> {this.state.id === 0 ? "Agregar" : "Editar"} Usuario </h3>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="name" value={this.state.name}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.name.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input className="form-control" type="text" id="lastName" value={this.state.lastName}
                                onChange={this.handleInputChange} noValidate/>
                                {errors.lastName.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.lastName}</div>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" id="email" value={this.state.email}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.email.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input className="form-control" type="password" id="password" value={this.state.password}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.password.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.password}</div>}
                        </div>
                        <div className="form-group">
                            <label>Dependencia</label>
                            <input className="form-control" type="text" id="dependency" value={this.state.dependency}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.dependency.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.dependency}</div>}
                        </div>
                        <div className="form-group">
                            <label>Valido Hasta</label>
                            <input className="form-control" type="date" id="valid_until" value={this.state.valid_until}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.valid_until.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.valid_until}</div>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="active" value={this.state.active}
                                checked={this.state.active} onChange={this.handleBoxChange} />
                            <label className="form-check-label" htmlFor="active">
                                Activa
                            </label>
                        </div>
                        <div className="container">
                            <button type="button submit" className="btn btn-primary"> <i className="fa fa-plus" aria-hidden="true"></i> </button>
                            <this.ShowClearButton />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
