import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Recherche from "@/components/Recherche/Recherche";
import Cotisation from "@/components/Cotisation/Cotisation";
import Profile from "@/components/Profile/Profile";

const Admin = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(<Profile />);

    const toggle = () => setIsOpen(!isOpen);

    const handleNavClick = (component) => {
        setCurrentPage(component);
    }

    return (
        <div className="d-flex h-100" >
            <Navbar color="dark" dark className="w-10" >
                <NavbarBrand href="/">Alumni dashboard</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={() => handleNavClick(<Profile />)}>Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => handleNavClick(<Recherche />)}>Recherche</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => handleNavClick(<Profile />)}>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => handleNavClick(<Cotisation />)}>Cotisation</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => handleNavClick(<Profile />)}>Déconnexion</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="flex-fill">
                {currentPage}
            </div>
        </div>
    );
}
export default Admin;