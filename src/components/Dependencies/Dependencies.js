import React, { Component } from 'react';
import db from '../../config/firebase';
import Dependency from './Dependency';
import AddDependency from './AddDependency';


export default class Dependencies extends Component {

    constructor() {
        super();
        this.state = {
            dependencies: [],
            dependencyToEdit: this.clearDependency(),
        }
    }


    refresh = async () => {
        let dependencies = [];
        try {
            const query = await db.collection('dependencies').get();
            dependencies = query.docs.map(doc => doc.data());
            this.setState({
                dependencies
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount = async () => {
        this.refresh();
    }

    addDependency = async (dependency) => {
        if (dependency.id === 0){
            const date = new Date();
            dependency.id = date.getTime()+ ""; 
        }
        try {
            const res = await db.collection('dependencies').doc(dependency.id+'').set(dependency);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        this.setState({dependencyToEdit: this.clearDependency()});
        this.refresh();
    }

    deleteDependency = async (dependency) => {
        //TODO CHECKE THERE ARE NO USERS ASIGNED TO THE DEPENDENCY
        try {
            const res = await db.collection('dependencies').doc(dependency.id+'').delete();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        this.refresh();
    }

    startEditDependency = (dependency) => {
        this.setState({
            dependencyToEdit: dependency,
        });
    }

    renderDependencies = () => {
        let dependenciesTable = this.state.dependencies.map(dependency => <Dependency key={dependency.name} dependency={dependency}
            onDelete={this.deleteDependency} onEdit={this.startEditDependency} />);
        return dependenciesTable;
    }

    clearDependency = () => {
        return {
            id: 0,
            name: "",
            coordinator: "",
            max_users: "",
            location: "",
            active: true,
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3>Check out your dependencies!</h3>
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Coordinador</th>
                                <th scope="col">Máximo número usuarios</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col">Activa</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDependencies()}
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <AddDependency handleNewDependency={this.addDependency} dependency={this.state.dependencyToEdit} />
                </div>
            </div>
        )
    }
}
