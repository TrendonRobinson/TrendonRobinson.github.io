import React from 'react';
import './Contact.css';
// import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function Contact() {


    return (
        <div className="Contact"> 
            <div className='form'>
                <Typography gutterBottom variant="h3" align="center">
                    CONTACT ME
                </Typography>
                <Grid>
                    <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
            <div className="contact-info">
                <Typography gutterBottom variant="h3" align="center">
                    REACH ME ON
                </Typography>
                
                <ul>
                    <li>
                        <LocalPhoneIcon/> +1 470 304 7418
                    </li>
                    <li>
                        <EmailIcon/> trendonrobinson@gmail.com
                    </li>
                    <li>
                        <LinkedInIcon/> https://www.linkedin.com/in/trendon-robinson-51aa001a1/
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
