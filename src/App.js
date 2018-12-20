import React, {Component} from 'react';
import './App.css';
import GroupForm from "./Components/GroupForm";
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Group from "./Components/Group";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGasPump,  faHotel, faUtensils, faTaxi , faShoppingCart,faFutbol} from '@fortawesome/free-solid-svg-icons';

library.add(faGasPump, faHotel, faUtensils,faTaxi,faShoppingCart, faFutbol );

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
