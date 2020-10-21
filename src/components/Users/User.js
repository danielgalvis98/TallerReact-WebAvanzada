import React, { Component } from 'react'

export default class User extends Component {



    handleDeleteUser = () => {
        this.props.onDelete(this.props.user);
    }

    handleEditUser = () => {
       
        this.props.onEdit(this.props.user);
    }


   

    render() {
        return (
            <>
                <tr>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.lastName}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.password}</td>
                    <td>{this.props.user.dependency}</td>
                    <td>{this.props.user.valid_until.toString()}</td>
                    <td>{this.props.user.active ? "Sí" : "No"}</td>
                    <td>
                        <span className="col-3">
                            <button type="button" className="btn btn-danger" onClick={this.handleDeleteUser}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                        </span>
                        <span className="col-3">
                            <button type="button" className="btn btn-primary" onClick={this.handleEditUser}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        </span>
                      
                    </td>
                </tr>
                
            </>
        )
    }
}