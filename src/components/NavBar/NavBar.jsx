
import Avatar from "../Avatar/Avatar";
import menuIcon from '../../assets/icons/hamburger.svg';
import closeX from '../../assets/icons/closingX.svg';

import "./NavBar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="navbar__top">
                <div className="navbar__left">
                    <img
                        src={isOpen ? closeX : menuIcon}
                        alt="close X icon"
                        onClick={() => setIsOpen(prev => !prev)}
                        className="navbar__menu"
                    />
                    <p className="navbar__logo">OneToOne Relief</p>
                </div>
                <Avatar photoUrl="https://picsum.photos/200" modifier='--nav' />
            </div>

            {/* Links */}
            {isOpen &&
                <div className="navbar__links">
                    <Link className="navbar__link" to="/">Current Disasters</Link>
                    <Link className="navbar__link" to="#">About Us</Link>
                    <Link className="navbar__link" to="#">How you can help</Link>
                    <Link className="navbar__link" to="#">Contact Us</Link>
                </div>
            }

        </nav>
    );
}

export default NavBar;
