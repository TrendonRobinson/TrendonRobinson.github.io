import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

// Components
import Nav from "../Components/Nav";

// Sections
import Works from "../Components/Works"


export default function Home() {
    return (
        <Container className="Home">
            <IntroContainer>
                <NameContainer>
                    <Nav />
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
                </BioContainer>
            </IntroContainer>
            <Works/>
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

const BioContainer = styled.div`
    /* width: 300px */
`;
const Bio = styled.div`
    font-size: 30px;
`;

const LightText = styled.div`
    opacity: 0.2;
    font-size: 12px;
    padding: 50px 0px;

    @media (max-width: 767.98px) {
        display: None;
    }
`;

const LargeText = styled.div`
    font-size: 80px;
    line-height: 80px;
    padding-top: 20%;
`;
