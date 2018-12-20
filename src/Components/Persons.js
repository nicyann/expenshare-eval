import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {Button} from "reactstrap";
import FormPerson from "./FormPerson";
import {NavLink, Route} from "react-router-dom";

class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {persons: []};
    }

    componentDidMount() {
        fetch('http://php/EVAL-REACT/expenshare/public/person/group/' + this.props.slug)
            .then(response => response.json())
            .then(data => this.setState({persons: data}))
        ;
    }

    handleNewPerson(person) {
        let persons = this.state.persons;
        persons.push(person);
        console.log('after :', persons);
        this.setState({ persons: persons });
    }

    render() {

        const persons = this.state.persons.map(person => {
            let total = person.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0);
            return (

                <tr key={person.id}>
                    <td>{person.firstname}</td>
                    <td>{person.lastname}</td>
                    <td>{person.expenses.length} </td>
                    <td>{total}€</td>
                    <td><Button >Modifier</Button></td>
                    <td><Button color="warning">Supprimer</Button></td>
                </tr>

            );
        });

        return (
            <div className="container">
                <h2>Liste des personnes</h2>
                <NavLink className="btn btn-success mb-4" to={this.props.match.url + '/add'}>Ajouter une personne</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <FormPerson {...props} callBack={this.handleNewPerson.bind(this)} slug={this.props.slug}/>}/>

                <Table>
                    <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Nombre</th>
                        <th>Somme</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {persons}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Persons;