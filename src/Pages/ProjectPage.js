import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";

export default function ProjectPage(props) {
    const project = props.project;
    console.log(project);

    const { works, setWorks } = props;
    useEffect(() => {
        if (!works) {
            setWorks(true);
        }
    }, [works]);
    return (
        <FadeIn>
            <ProjectContainer>
                <Title>{project.title}</Title>
                <Content class="col-span-2">
                    <img
                        src={project.image} //
                        class="rounded-xl brightness-75"
                        alt="name"
                    />
                </Content>
                <Description>{project.description}</Description>
                <Button href={`${project.url}`}>
                    <button>Visit</button>
                </Button>
            </ProjectContainer>
            <BackGroundText>
                <h1>{project.title}</h1>
            </BackGroundText>
        </FadeIn>
    );
}

const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* text-align: center; */

    div {
        display: flex;
        justify-content: center;
        /* margin-bottom: 20px; */
        /* align-items: center; */
    }

    @media (max-width: 767.98px) {
        padding: 10px 20px;
    }
    @media (min-width: 576px) {
        padding: 10px 300px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: bolder;
`;

const Content = styled.div`
    img {
        width: 600px;
        height: auto;
    }

    h5 {
        font-size: 10px;
    }
`;

const Description = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 150px;*/
    /* height: 60px; */
    margin-top: 10px;
    text-align: center;
    padding: 10px 25px;

    background-color: rgba(0, 0, 0, 0);
    border-radius: 20px;
    border: 1px solid #fff;

    font-family: "latohairline", Arial, sans-serif;
    font-weight: 700;
    font-size: 350%;
`;

const BackGroundText = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    /* font-family: "latohairline", Arial, sans-serif; */
    font-size: 1500%;
    line-height: 100%;
    font-weight: bolder;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.05);

    top: 0;
    left: 0;

    align-self: center;
    justify-self: center;
    @media (max-width: 767.98px) {
        font-size: 30vw;
    }
`;
