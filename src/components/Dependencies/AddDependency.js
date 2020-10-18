import React, { Component } from 'react'

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
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log(nextProps.dependency.id);
        if (nextProps.dependency.id !== prevState.id) {
            return {
                id: nextProps.dependency.id,
                name: nextProps.dependency.name,
                coordinator: nextProps.dependency.coordinator,
                max_users: nextProps.dependency.max_users,
                location: nextProps.dependency.location,
                active: nextProps.dependency.active
            }
        }
        return null;
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleBoxChange = (event) => {
        this.setState({ [event.target.id]: event.target.checked });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.id)
        if (this.state.id === 0) {
            this.setState({ id: 1});
        }
        console.log(this.state.id);
        this.props.handleNewDependency(this.state);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3> Agregar Dependencia </h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="name" value={this.state.name}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Coordinador</label>
                            <input className="form-control" type="text" id="coordinator" value={this.state.coordinator}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Máximo número de usuarios</label>
                            <input className="form-control" type="number" id="max_users" value={this.state.max_users}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Ubicacion</label>
                            <input className="form-control" type="text" id="location" value={this.state.location}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="active" value={this.state.active}
                                checked={this.state.active} onChange={this.handleBoxChange} />
                            <label className="form-check-label" htmlFor="active">
                                Activa
                            </label>
                        </div>
                        <button type="button submit" className="btn btn-primary"> <i className="fa fa-plus" aria-hidden="true"></i> </button>
                    </form>
                </div>
            </div>
        )
    }
}
