import React, {Component} from 'react';

class GroupUser extends Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {persons: []};

    }

    componentDidMount() {
        fetch('http://php/EVAL-REACT/expenshare/public/person', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({persons: data}))
        ;
    }


    render() {
        const persons=this.state.persons.map(person => <li  key={person.id}>{person.firstname + ' ' + person.lastname}</li>  );
        return (
            <div>
                {persons}
            </div>
        );
    }
}

export default GroupUser;