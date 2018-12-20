import React, {Component} from 'react';
import {NavLink, Route } from "react-router-dom";
import Table from "react-bootstrap/es/Table";
import FormPerson from "./FormPerson";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = { expenses: [] };
    }

    componentDidMount() {
        fetch('http://php/EVAL-REACT/expenshare/public/expense/group/' + this.props.slug)
            .then(response => response.json())
            .then(data => this.setState({ expenses: data }))
        ;
    }

    render() {
        const expenses =  this.state.expenses.map(expense => {

        return (


            <tbody>
            <tr>
                <td >{expense.id}</td>
                <td>{expense.person.firstname + ' ' + expense.person.lastname}</td>
                <td>{expense.amount}</td>
                <td>{expense.title}</td>
                <td>{expense.category.label}</td>
                <td><FontAwesomeIcon icon={expense.category.icon}/></td>
                <td>{moment(expense.createdAt).format("D/M/Y")}</td>
            </tr>
            </tbody>
        );


        })


        return (
            <React.Fragment>

                <h2>Dépenses</h2>
                <NavLink className="btn btn-success mb-4" to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} component={FormPerson}/>

                {/* Afficher la liste des dépenses */}

                <Table >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dépense</th>
                        <th>Description</th>
                        <th>Catégorie</th>
                        <th>Icon</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    {expenses}
                </Table>
                </React.Fragment>

        );

    }

}

export default Expenses;