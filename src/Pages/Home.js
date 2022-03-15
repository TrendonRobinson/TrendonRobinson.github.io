import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.scss";

// Sections
import Works from "../Components/Works";

// Comp
import Nav from "../Components/Nav";

export default function Home(props) {
    const [display, setDisplay] = useState(false);
    const { works, setWorks } = props;

    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setWorks(true);
            }, 1000 / 1.5);
        } else {
            setTimeout(() => {
                setDisplay(true);
            }, 2000);
        }
    }, [display]);

    function Display() {
        console.log("test");
        setDisplay(true);
    }

    return (
        <Container className="Home">
            <GetStarted
                onClick={Display}
                className={`Started ${display ? "hidden" : ""} ${
                    works ? "hide" : ""
                }`}
            >
                <Name>Trendon Robinson</Name>
                <StartText>Welcome</StartText>
            </GetStarted>
            <Works classes={`${works ? "show" : "hide"}`} />
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 5vw;
    @media (max-width: 767.98px) {
        font-size: 10vw;
    }
`;

const Name = styled.div`
    line-height: normal;
    font-weight: 500;
    /* font-family: "Brush Script MT", 'Brush Script Std', cursive; */
    font-family: "latohairline", Arial, sans-serif;
    @media (min-width: 576px) {
        font-size: 5vw;
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
    @media (max-width: 767.98px) {
        font-size: 10px;
    }
    @media (min-width: 576px) {
        font-size: 25px;
    }
`;
