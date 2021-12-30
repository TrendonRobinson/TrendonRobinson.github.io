import { Link } from "react-router-dom";

import './NavBar.css'

import IconButton from '@mui/material/IconButton';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import LogoDevIcon from '@mui/icons-material/LogoDev';


export default function NavBar() {

    return (
        <nav>
                <div className="Logo">
                    <LogoDevIcon/>
                </div>
                <div className="Links">
                    <div className="Link-Container"><Link id="HomeLink" to="/">Home</Link></div>
                    <div className="Link-Container"><Link to="/projects">Projects</Link></div>
                    <div className="Link-Container"><Link to="/services">Services</Link></div>
                    <div className="Link-Container"><Link to="/about">About</Link></div>
                    <div className="Link-Container"><Link to="/skills">Skills</Link></div>
                    <div className="Link-Container"><Link to="/contact">Contact</Link></div>
                </div>
                <div className="Socials">

                    <IconButton aria-label="delete" size="small">
                        <TwitterIcon/>
                    </IconButton>

                    <IconButton aria-label="delete" size="small">
                        <InstagramIcon/>
                    </IconButton>

                    <IconButton aria-label="delete" size="small">
                        <LinkedInIcon/>
                    </IconButton>

                </div>
            </nav>
    )
}