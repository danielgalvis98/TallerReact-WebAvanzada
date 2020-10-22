import React, { Component } from 'react';

export default class AddDependency extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            coordinator: "",
            max_users: "",
            location: "",
            active: true,
            errors: {
                name: 'El nombre es obligatorio',
                coordinator: 'El coordinador es obligatorio',
                max_users: 'El máximo de usuarios es obligatorio',
                location: 'La ubicación es obligatoria',
            }
        };
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.dependency.id !== prevState.id) {
            return {
                id: nextProps.dependency.id,
                name: nextProps.dependency.name,
                coordinator: nextProps.dependency.coordinator,
                max_users: nextProps.dependency.max_users,
                location: nextProps.dependency.location,
                active: nextProps.dependency.active,
                errors: {
                    name: nextProps.dependency.name === '' ? 'El nombre es obligatorio' : '',
                    coordinator: nextProps.dependency.coordinator === '' ? 'El coordinador es obligatorio':'',
                    max_users: nextProps.dependency.max_users === '' ? 'El máximo de usuarios es obligatorio':'',
                    location: nextProps.dependency.location === '' ? 'La ubicación es obligatoria': '',
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
            case 'coordinator':
                errors.coordinator =
                    value === '' ? 'El Coordinador es obligatorio' : '';
                break;
            case 'max_users':
                errors.max_users =
                    value === '' ? 'El maximo de usuarios es obligatorio' : value <= 0 ?
                        'El maximo de usuarios debe ser un valor positivo' : '';
                break;
            case 'location':
                errors.location =
                    value === '' ? 'Se debe de especificar una ubicacion' : '';
                break;
            default:
                break;
        }
        this.setState({ [id]: value, errors });
    }

    handleBoxChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.checked });
        alert(this.state.active);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            if (this.state.id === 0) {
                this.setState({ id: 1 });
            }
            const { errors, ...toAdd } = this.state;

            this.props.handleNewDependency(toAdd);
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
                    <h3> {this.state.id === 0 ? "Agregar" : "Editar"} Dependencia </h3>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="name" value={this.state.name}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.name.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label>Coordinador</label>
                            <input className="form-control" type="text" id="coordinator" value={this.state.coordinator}
                                onChange={this.handleInputChange} noValidate/>
                                {errors.coordinator.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.coordinator}</div>}
                        </div>
                        <div className="form-group">
                            <label>Máximo número de usuarios</label>
                            <input className="form-control" type="number" id="max_users" value={this.state.max_users}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.max_users.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.max_users}</div>}
                        </div>
                        <div className="form-group">
                            <label>Ubicacion</label>
                            <input className="form-control" type="text" id="location" value={this.state.location}
                                onChange={this.handleInputChange} noValidate/>
                            {errors.location.length > 0 && 
                                <div className = 'alert alert-danger'>{errors.location}</div>}
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
