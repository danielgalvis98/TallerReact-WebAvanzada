import React, { Component } from 'react'

export default class AddDependency extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            coordinator: "",
            max_users: "",
            location: "",
            active: false,
        }
    }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleBoxChange = (event) => {
        this.setState({ [event.target.id]: event.target.checked });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let dependency = this.state;
        this.props.handleNewDependency(dependency);
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
                                checked={this.state.active} onChange={this.handleBoxChange}/>
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
