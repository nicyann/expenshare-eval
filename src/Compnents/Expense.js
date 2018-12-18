import React, {Component} from 'react';

class Expense extends Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {expenses: []};

    }

    componentDidMount() {
        fetch('http://php/EVAL-REACT/expenshare/public/expense', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({expenses: data}))
        ;
    }
    render() {
       // const expenses = this.state.expenses.map(expense =>)
        return (
            <div>
                
            </div>
        );
    }
}

export default Expense;