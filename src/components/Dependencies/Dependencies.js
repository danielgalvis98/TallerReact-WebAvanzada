import React, { Component } from 'react';
import db from '../../config/firebase';
import Dependency from './Dependency';
import AddDependency from './AddDependency';


export default class Dependencies extends Component {

    constructor() {
        super();
        this.state = {
            dependencies: [],
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
        try{
            const res = await db.collection('dependencies').doc(dependency.name).set(dependency);
            console.log(res);
        } catch (error){
            console.error(error);
        }
        this.refresh();
    }

    renderDependencies = () => {
        let dependenciesTable = this.state.dependencies.map(dependency => <Dependency key={dependency.name} dependency={dependency} />);
        return dependenciesTable;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Coordinador</th>
                                <th scope="col">Máximo número usuarios</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col">Activa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDependencies()}
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <AddDependency handleNewDependency={this.addDependency}/>
                </div>
            </div>
        )
    }
}
