import './Services.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BrushIcon from '@mui/icons-material/Brush';

function Services() {
    return (
        <div className='Services'>
            <Box className="service-cards">
                <Paper elevation={6}>
                    <h1>
                        Front-end <br/> Web Development
                    </h1>
                    <LanguageIcon sx={{ fontSize: 80 }} className="icon"/>
                    <p>
                        A strong front-end developer with the
                        experience to develop a quality full stack application.
                    </p>
                </Paper>
                <Paper elevation={6}>
                    <h1>
                        Game <br/> Development
                    </h1>
                    <SportsEsportsIcon sx={{ fontSize: 80 }} className="icon"/>
                    <p>
                    I am offering my services as a scripter. 
                    With 9 years to back my skill, 
                    I specialize in front-end programming.
                    </p>
                </Paper>
                <Paper elevation={6}>
                    <h1>
                        Graphic <br/> Design
                    </h1>
                    <BrushIcon sx={{ fontSize: 80 }} className="icon"/>
                    <p>
                    I am offering my services as a graphic designer. 
                    With 5 years to compliment my experience, 
                    I primarily specialize in game ui how ever I do web design as well
                    </p>
                </Paper>
            </Box>
        </div>
    );
}

export default Services;
