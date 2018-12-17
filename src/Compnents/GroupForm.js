import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


class GroupForm extends Component {




    render() {
        return (
            <div className="App">
                <Form>
                    <FormGroup>
                        <h1 className="display-3">Nouveau groupe</h1>
                        <Label for="group-name">Saisissez l'identifiant du Groupe</Label>
                        <br/>
                        <Input type="text" name="groupe" id="exemple-groupe" placeholder="with a placeholder"/>
                        <br/>
                            <Button color="warning" size="lg">Créer</Button>{' '}
                            <Button color="success" size="lg">Ouvrir</Button>{' '}

                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GroupForm;