import React, {Component} from 'react';
import './App.css';
import GroupForm from "./Compnents/GroupForm";
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupUser from "./Compnents/GroupUser";
import Menu from "./Compnents/Menu";


class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
            <div className="App-header">


                    <Route path="/" exact component={GroupForm}/>
                    <Route path="/personne" component={GroupUser}/>


            </div>
            </div>
        )
    }
}

export default App;
