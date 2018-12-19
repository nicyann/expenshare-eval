import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (

            <Navbar color="light" light expand="md">
                <NavbarBrand>Expenshare</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to={this.props.url} className="nav-link">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url +"/expenses"} className="nav-link">Dépenses</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url + "/persons"} className="nav-link">personne</NavLink>
                        </NavItem>
                    </Nav>


                </Collapse>
            </Navbar>
        );
    }
}

export default Menu;