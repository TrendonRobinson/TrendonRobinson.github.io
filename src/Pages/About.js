import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";

export default function About(props) {
    const { works, setWorks } = props;
    useEffect(() => {
        if (!works) {
            setWorks(true);
        }
    }, [works]);
    return (
        <Container className="About">
            <BackGroundText>About</BackGroundText>
            <FadeIn className="Fade">
                <TextContainer>
                    <Title>About Me</Title>
                    <PTags>
                        <div>
                            <p>
                                Hello, I am Trendon Robinson, Software Engineer,
                                Game Developer, and Graphic Designer based in
                                Georgia. Graduated from General Assembly with
                                plans to attend Kennesaw State University.
                            </p>
                            <br />
                            <p>
                                I got introduced to programming from a game
                                called "Script Builder" in which kids would
                                trade code with one another or use scripts made
                                by others, I used scripts made by others since I
                                could not script and as time went on I would
                                change little things like colors, sizes, and
                                other properties of objects, so I really ended
                                up teaching myself. After that i fell in love
                                with it, coding is now one of my favorite things
                                to do nowadays.
                            </p>
                        </div>
                        <br />
                        <div>
                            <p>
                                After my experience with game development
                                software engineering caught my attention and
                                through personal projects and working with other
                                developers to further build my skills. I hope to
                                continue growing to be come the best developer I
                                can be!
                            </p>
                        </div>
                    </PTags>
                </TextContainer>
            </FadeIn>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;

    .Fade {
        > div {
            display: flex;
            justify-content: center;
            > div {
            }
        }
    }
`;
const PTags = styled.div`
    display: flex;
    @media (min-width: 576px) {
        div {
            width: 50%;
            padding-right: 5px;
        }
    }

    @media (max-width: 767.98px) {
        flex-direction: column;
    }
`;
const TextContainer = styled.div`
    @media (min-width: 576px) {
        width: 50%;

        p {
            width: 100%;
        }
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: bolder;
`;

const BackGroundText = styled.div`
    z-index: -1;
    height: 100vh;
    width: 200%;
    position: absolute;
    font-size: 30vw;
    font-weight: bolder;
    overflow: hidden;
    /* word-break: break-all; */
    color: rgba(255, 255, 255, 0.05);
    text-align: left;

    top: 20vh;
    left: 0vw;

    align-self: center;
    justify-self: center;
    @media (max-width: 767.98px) {
        font-size: 30vw;
    }
`;
