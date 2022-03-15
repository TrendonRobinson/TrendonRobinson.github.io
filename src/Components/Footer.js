import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterDiv>
            <p>trendonrobinson@gmail.com</p>
        </FooterDiv>
    );
}

const FooterDiv = styled.div`
    z-index: 4;
    width: 90%;
    text-align: left;
    height: 30px;
`;
