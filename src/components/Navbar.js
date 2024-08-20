import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavLinks,
    NavMenu,
    MobileIcon,
} from './NavbarStyles';
import '../App.css';
import logo from './bmslarge.png';
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <Fragment>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>


                <NavContainer>
                    <NavLogo href="#" className='navbar-brand'><img src={logo} alt="Logo" /></NavLogo>
                    <MobileIcon>
                        <FaBars />


                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLinks className='navLinks' href="#whyhire" > Why Hire</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className='navLinks' href="#services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className='navLinks' href="#howitworks">How it Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className='navLinks' href="#testimonials">Testimonials</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className='navLinks' href="#contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>


            </Nav>
        </Fragment>
    )
}

export default Navbar;




