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
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects" eventKey="link-1">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" eventKey="link-2">Contacts</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}