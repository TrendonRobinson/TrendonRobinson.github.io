import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css"

// Sections
import Works from "../Components/Works";

export default function Home() {
    const [display, setDisplay] = useState(false)
    const [works, setWorks] = useState(false)

    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setWorks(true)
            }, 1000/1.5);
        }
    }, [display])
    

    function Display() {
        console.log('test')
        setDisplay(true)
    }

    return (
        <Container className="Home">
            <GetStarted onClick={Display} className={`Started ${display ? 'hidden' : ''} ${works ? 'hide' : ''}`}>
                <Name>Trendon Robinson</Name>
                <StartText>Click to get Started</StartText>
            </GetStarted>
            <Works classes={`${works ? 'show' : 'hide'}`}/>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 5vw;
    @media (max-width: 767.98px){
    	font-size: 10vw
    }
`;

const Name = styled.div`
    line-height: normal;
    font-weight: 100;
    font-family: "Brush Script MT", 'Brush Script Std', cursive;
    @media (min-width: 576px){
    	font-size: 7vw
    }
`;

const GetStarted = styled.button`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StartText = styled.p`
    
    @media (max-width: 767.98px){
    	font-size: 10px;
    }
    @media (min-width: 576px){
    	font-size: 25px;
    }
`;
