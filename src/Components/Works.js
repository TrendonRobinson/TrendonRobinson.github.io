import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

// Components
import Nav from "./Nav";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
const projectsJson = require("../Json/projectInfo.json");

export default function Works(props) {
    const { classes } = props;
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const [display, setDisplay] = useState(true);
    const displayText = "";
    const n = 2;

    useEffect(() => {}, [transition]);

    const pagination = {
        clickable: true,
        // bulletClass: "bullet",
        renderBullet: function (index, className, test) {
            return (
                '<button class="' + className + '">' + (index + 1) + "</button>"
            );
        },
    };

    const projects = projectsJson.map((element, index) => {
        return (
            <SwiperSlide>
                <Content class="col-span-2">
                    <Title className="slide-title">
                        <h2>{element.title}</h2>
                    </Title>
                    <Link to={`/${element.route}`}>
                        <img
                            src={element.image} //
                            class="rounded-xl brightness-75"
                            alt="name"
                        />
                    </Link>
                    <Description className="description">
                        <h1 style={{ opacity: ".5" }} class="title">
                            {element.title}
                        </h1>
                    </Description>
                </Content>
            </SwiperSlide>
        );
    });

    function repeatText(element) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(element);
        }
        return arr;
    }

    function onChange({ activeIndex: _index }) {
        setDisplay(false);
        setTransition(true);
        setIndex(_index);
        setTimeout(() => {
            setDisplay(true);
        }, 5);
        setTimeout(() => {
            setTransition(false);
        }, 1000 / 1.5);
    }

    return (
        <WorkContainer className={classes}>
            <Swiper
                pagination={pagination}
                navigation
                spaceBetween={50}
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                onSlideChange={onChange}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {projects}
            </Swiper>
            {isMobile ? (
                ""
            ) : (
                <BackGroundText
                    className={transition ? "transition" : ""}
                    style={
                        transition
                            ? {
                                  transition: 0,
                                  opacity: 0,
                                  display: display ? "block" : "none",
                              }
                            : {
                                  transitionDelay: "0.25s",
                                  transition: "0.5s",
                                  opacity: "1",
                              }
                    }
                >
                    <h1>{repeatText(projectsJson[index].title)}</h1>
                </BackGroundText>
            )}
        </WorkContainer>
    );
}

const WorkContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
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

const Title = styled.div`
    @media (min-width: 767.98px) {
        /* display: none; */
    }
`;

const Description = styled.div`
    position: absolute;
    transform: translate(-30%, -225%);
    font-weight: 700;
    font-size: 70px;
`;

const BackGroundText = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    font-size: 15vw;
    text-align: left;
    line-height: 100%;
    font-weight: bolder;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.05);

    top: 0;
    left: 0;
    white-space: nowrap;

    align-self: center;
    justify-self: center;
    @media (max-width: 767.98px) {
        font-size: 30vw;
    }
`;

// const BackGroundText = styled.div`
//     height: 40vh;
//     width: 200%;
//     position: absolute;
//     /* align-self: center;
//     justify-self: center;
//     transform: translateY(-22vw); */
//     left: 0;
//     right: 0;
//     margin-left: auto;
//     margin-right: auto;
//     font-size: 15vw;
//     font-weight: bolder;
//     word-break: break-all;
//     color: rgba(255, 255, 255, 0.05);
//     text-align: left;

//     @media (min-width: 576px) {
//         transform: translateY(-10vh);
//     }
// `;
