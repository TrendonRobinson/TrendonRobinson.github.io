import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

// Components
import Nav from "../Components/Nav";

// Sections
import Works from "../Components/Works";

export default function Home() {
    return (
        <Container className="Home">
            <IntroContainer>
                <NameContainer>
                    <Nav />
                    <Image>
                        <img
                            src="https://images.ctfassets.net/fevtq3bap7tj/4rsL8Wiv2EuyaOKgwC0OOU/93dc05128009c2ec38cd34e35dd46fb2/Home_illustration.png"
                            alt="graphic"
                        />
                    </Image>
                    <LargeText>
                        Trendon
                        <br />
                        Robinson
                    </LargeText>
                </NameContainer>
                <BioContainer>
                    <Name>TRENDON/R.</Name>
                    <LightText>{"/THIS IS ME"}</LightText>
                    <Bio>Experience designer and developer from Georgia.</Bio>

                    <LightText>
                        {
                            "A profession software developer. Loves to add clarity to complicated concepts by design."
                        }
                    </LightText>
                    {/* <CodeText style={{fontSize: "200%", paddingTop: "30%"}}>
                        {`<div>`} 
                        <IndentedText>{`<h1>Welcome<h1/>`}</IndentedText>
                        {`<div/>`}
                    </CodeText> */}
                </BioContainer>
            </IntroContainer>
            <hr style={{width: '100vw', transform: `translate(-14vw, 0px)` }}/>
            <Works />
        </Container>
    );
}

const IntroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    /* height: 100vh; */
    @media (max-width: 767.98px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

const Container = styled.div``;

const Name = styled.button`
    justify-self: left;
    padding-right: 50px;

    &:active {
    }

    @media (max-width: 767.98px) {
        display: None;
    }
`;

const NameContainer = styled.div`
    /* width: 300px */
`;
const Image = styled.div`
    @media (min-width: 767.98px) {
        width: 30vw;
        min-width: 300px;
        position: absolute;
        left: 35vw;
        top: 35%;
        transform: translate(-15vw, -50%);
        z-index: -1;
    }
    @media (max-width: 767.98px) {
    }

    /* width: 300px */
`;

const ImageTwo = styled.div`
    @media (min-width: 767.98px) {
        width: 23vw;
        position: absolute;
        left: 67%;
        top: 63%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    @media (max-width: 767.98px) {
    }

    /* width: 300px */
`;

const BioContainer = styled.div`
    /* width: 300px */
`;
const Bio = styled.div`
    font-size: 30px;
`;

const LightText = styled.div`
    opacity: 0.5;
    font-size: 12px;
    padding: 50px 0px;

    @media (max-width: 767.98px) {
        display: None;
    }
`;

const CodeText = styled.div`
    font-family: "Brush Script MT", cursive;
    opacity: .2;

    @media (max-width: 767.98px){
    	display: none;
    }
`;

const IndentedText = styled.div`
    text-indent: 20px;
`;

const LargeText = styled.div`
    text-align: center;
    font-size: 13vw;
    line-height: 100%;
    padding-top: 20%;
    @media (min-width: 767.98px) {
        padding-top: 27rem;
        font-size: 8vw;
    }
`;
