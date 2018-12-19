import React, {Component} from 'react';
import './App.css';
import GroupForm from "./Components/GroupForm";
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupUser from "./Components/GroupUser";
import Menu from "./Components/Menu";
import Expense from "./Components/Expenses";
import Group from "./Components/Group";



class App extends Component {
    render() {
        return (


            <div className="App-header">
                    <Route path="/" exact component={GroupForm}/>
                    <Route path="/group/:slug" component={Group}/>


            </div>

        )
    }
}

export default App;
