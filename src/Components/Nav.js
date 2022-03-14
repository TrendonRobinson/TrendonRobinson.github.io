import React from "react";
import styled from "styled-components";

export default function Nav(props) {
    const { classes } = props;

    return (
        <NavContainer className={`Nav ${classes}`}>
            <Logo>T-R</Logo>
            <Links>
                <Item>Stories.</Item>
                <Item>Works.</Item>
                <Item>Contacts.</Item>
            </Links>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding-top: 50px;
    padding-bottom: 70px;

    width: 100vw;

    @media (max-width: 767.98px) {
        /* align-items: flex-end; */
        padding: 0px 20px;
        justify-content: space-between;
    }
`;

const Logo = styled.div`
    font-family: "latohairline", Arial, sans-serif;
    font-size: 20px;
    font-weight: 900;
    border: 1px solid #fff;
    /* margin-right: 80vw; */
    padding: 5px 5px
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
`;

const Item = styled.button`
    justify-self: left;
    padding-right: 10px;
    font-size: 10px;

    &:active {
    }

    @media (max-width: 767.98px) {
        justify-self: auto;
        padding: 0;
    }
`;
