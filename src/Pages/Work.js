import React, { useEffect } from "react";
import styled from "styled-components";
import Works from "../Components/Works";

export default function Work(props) {
    const { works, setWorks } = props;
    useEffect(() => {
        setWorks(true);
    }, [works]);

    return (
        <Container>
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
