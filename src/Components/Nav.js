import React from "react";
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavContainer className="Nav">
            <Item>Stories.</Item>
            <Item>Works.</Item>
            <Item>Contacts.</Item>
        </NavContainer>
    );
}


const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 767.98px){
        /* align-items: flex-end; */
        padding: 0px 20px;
        justify-content: space-evenly;
    }
`

const Item = styled.button`
    justify-self: left;
    padding-right: 50px;


    &:active {

    }

    @media (max-width: 767.98px){
        justify-self: auto;
        padding: 0;
    }
    
`