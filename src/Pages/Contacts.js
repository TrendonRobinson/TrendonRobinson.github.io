import React, { useEffect } from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import FadeIn from "react-fade-in";

const urls = [
    ["+1(470)-304-7418", "+1(470)-304-7418"],
    ["trendonrobinson@gmail.com", "trendonrobinson@gmail.com"],
    ["Discord", "https://discordapp.com/users/343115882945314838"],
    ["LinkedIn", "https://www.linkedin.com/in/trendon-robinson-51aa001a1/"],
    ["Github", "https://github.com/TrendonRobinson"],
    ["Twitter", "https://twitter.com/TPr0fessor/media"],
    ["Youtube", "https://www.youtube.com/channel/UCY_I_H40etedJs4oPuENnZg"],
];

export default function Contacts(props) {
    const { works, setWorks } = props;
    useEffect(() => {
        if (!works) {
            setWorks(true);
        }
    }, [works]);

    const urlsMapped = urls.map((element) => {
        return (
            <div>
                <SocialIcon url={element[1]} />
                <a href={element[1]}>{element[0]}</a>
            </div>
        );
    });

    return (
        <Container className="Contact">
            <BackGroundText>Contact</BackGroundText>
            <FadeIn>
                <SocialList>{urlsMapped}</SocialList>
            </FadeIn>

            {/* <img
                src='https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png'
                alt='test'
            /> */}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const BackGroundText = styled.div`
    z-index: -1;
    height: 100vh;
    width: 200%;
    position: absolute;
    font-size: 25vw;
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
        font-size: 25vw;
        transform: translateY(25%);
    }
`;

const SocialList = styled.div`
    display: flex;
    flex-direction: column;
    /* filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(97deg)
        brightness(112%) contrast(100%); */

    font-weight: bolder;

    a {
        padding: 0 20px;
    }
    > div {
        margin-top: 20px;
    }
`;
