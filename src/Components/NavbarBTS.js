import { Link } from "react-router-dom";

// import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarBTS.css'

import LogoDevIcon from '@mui/icons-material/LogoDev';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function NavBar() {

    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Link id="HomeLink" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/projects">Projects</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact">Contact</Link>
            </Nav.Item>
        </Nav>
    )
}