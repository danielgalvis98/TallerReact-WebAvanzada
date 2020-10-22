import React, { Component } from 'react'

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            dependency: "",
        }
    }


    handleDeleteUser = () => {
        this.props.onDelete(this.props.user);
    }

    handleEditUser = () => {

        this.props.onEdit(this.props.user);
    }

    ButtonOptionsVisible = () => {
        if (this.props.manegeable) {
            return (<td>
                <span className="col-3">
                    <button type="button" className="btn btn-danger" onClick={this.handleDeleteUser}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                </span>
                <span className="col-3">
                    <button type="button" className="btn btn-primary" onClick={this.handleEditUser}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                </span>

            </td>);
        }
        return null;
    }

    componentDidMount = async () => {
        const dependency = await this.props.user.dependency.get();
        this.setState({
            dependency: dependency.data()
        })
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.user.dependency !== this.props.user.dependency) {
            const dependency = await this.props.user.dependency.get();
            this.setState({
                dependency: dependency.data()
            })
        }
    }


    render() {
        return (
            <>
                <tr>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.lastName}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.password}</td>
                    <td>{this.state.dependency.name}</td>
                    <td>{this.props.user.valid_until.toString()}</td>
                    <td>{this.props.user.active ? "Sí" : "No"}</td>
                    <this.ButtonOptionsVisible />
                </tr>

            </>
        )
    }
}