import React from "react";
import styled from "styled-components";

export default function About() {
    return (
        <Container>
            <BackGroundText>AboutAboutAboutAbout</BackGroundText>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

const BackGroundText = styled.div`
    height: 40vh;
    width: 200%;
    position: absolute;
    font-size: 15vw;
    font-weight: bolder;
    word-break: break-all;
    color: rgba(255, 255, 255, 0.05);
    text-align: left;

    align-self: center;
    justify-self: center;

    @media (min-width: 576px) {
        /* transform: translateY(-10vh); */
    }
`;
