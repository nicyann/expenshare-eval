import React, {Component} from 'react';
import Table from "react-bootstrap/es/Table";

class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = { persons: [] };
    }

    componentDidMount() {
        fetch('http://php/EVAL-REACT/expenshare/public/person/group/' + this.props.slug)
            .then(response => response.json())
            .then(data => this.setState({ persons: data }))
        ;
    }

    render() {

        const persons = this.state.persons.map(person => {
            let total = person.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0);
            return (

                    <tr>
                    <td>{person.firstname}</td>
                    <td>{person.expenses.length} </td>
                    <td>{total}€</td>
                    </tr>

            );
        });

        return (
            <div className="container">
                <h2>Liste des personnes</h2>

                <Table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Nombre</th>
                        <th>Somme</th>
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