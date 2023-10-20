import React from "react";
import "./NavBar.scss";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <header className="navbar">
            <Navbar collapseOnSelect expand="" className="navbar__wrapper">
                <div className="navbar__menu">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="#">IMMINENT DISASTERS</Nav.Link>
                            <Nav.Link href="#">ABOUT US</Nav.Link>
                            <Nav.Link href="#">HOW YOU CAN HELP</Nav.Link>
                            <Nav.Link href="#">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <Navbar.Brand href="#" className="navbar__profile-wrapper">
                    <div className="navbar__logo">
                        <p className="navbar__title">OneToOne Relief</p>
                        <div >
                            <p className='navbar__profile'>
                                <img />
                            </p>
                        </div>
                    </div>
                </Navbar.Brand>

            </Navbar>
        </header>
    );
}

export default NavBar;
