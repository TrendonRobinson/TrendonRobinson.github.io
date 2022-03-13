import React, { useRef, useState } from "react";
import styled from "styled-components";

// Components
import Nav from "./Nav";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const projectsInfo = [
    [
        'Quirkymals', 
        'https://tr.rbxcdn.com/b23f9987561066b3b92c7c77ed9fb413/768/432/Image/Png'
    ],
    [
        'Quirkymals', 
        'https://i.ibb.co/fdKbG9j/Screen-Shot-2022-03-11-at-4-58-28-AM.png'
    ],
    [
        'Quirkymals', 
        'https://tr.rbxcdn.com/b23f9987561066b3b92c7c77ed9fb413/768/432/Image/Png'
    ],
    [
        'Quirkymals', 
        'https://tr.rbxcdn.com/b23f9987561066b3b92c7c77ed9fb413/768/432/Image/Png'
    ],
    
    
];

export default function Works(props) {
    const { classes } = props;

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<button class="' + className + '">' + (index + 1) + "</button>"
            );
        },
    };

    const projects = projectsInfo.map((element, index) => {
        return (
            <SwiperSlide>
                <Content class="col-span-2">
                    <a href="link">
                        <img
                            src={element[1]}//
                            class="rounded-xl brightness-75"
                            alt="name"
                        />
                    </a>
                    <Description>
                        <h1 class="title">{element[0]}</h1>
                    </Description>
                </Content>
            </SwiperSlide>
        );
    });

    return (
        <WorkContainer className={classes}>
            <Swiper
                pagination={pagination}
                spaceBetween={50}
                modules={[Pagination]}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {projects}
            </Swiper>
        </WorkContainer>
    );
}

const WorkContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
`;

const Content = styled.div`
    /* display: flex;
    flex-direction: row; */

    img {
        width: 600px;
        height: auto;
    }


    h5 {
        font-size: 10px
    }
`;

const Description = styled.div`
    position: absolute;
    transform: translate(-30%, -225%);
    font-weight: 700;
    font-size: 70px;
    /* margin: 0px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px; */
`;
