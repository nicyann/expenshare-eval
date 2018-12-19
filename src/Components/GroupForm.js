import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Redirect} from "react-router-dom";


class GroupForm extends Component {


    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ slug: event.target.value });
    }
88
    handleCreate(event) {
        event.preventDefault();
        fetch('http://php/EVAL-REACT/expenshare/public/sharegroup/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                alert('Nouveau groupe créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création du groupe'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://php/EVAL-REACT/expenshare/public/sharegroup/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
                this.setState({ sharegroup: JSON.parse(data) });
            })
            .catch(err => alert('Ce groupe n\'existe pas !'))
        ;
    }



    render() {

        if (this.state.sharegroup) {
            return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
        }

        return (
            <div className="App">
                <Form>
                    <FormGroup>
                        <h1 className="display-3">Nouveau groupe</h1>
                        <Label for="group-name">Saisissez l'identifiant du Groupe</Label>
                        <br/>
                        <Input type="text" value={this.state.slug} onChange={e => this.handleChange(e)} name="groupe" id="exemple-groupe" placeholder="with a placeholder"/>
                        <br/>
                            <Button onClick={e => this.handleCreate(e)} color="warning" size="lg">Créer</Button>{' '}
                            <Button onClick={e => this.handleOpen(e)} color="success" size="lg">Ouvrir</Button>{' '}

                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GroupForm;