import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export default function Nav(props) {
    const { classes } = props;

    return (
        <NavContainer className={`Nav ${classes}`}>
            <Logo>T-R</Logo>
            <Links>
                <Link
                    to="/works"
                    activeClassName="active"
                    className={({ isActive }) =>
                        isActive ? "activeDot" : "inactive"
                    }
                >
                    Work<span>.</span>
                </Link>
                <Link
                    to="/about"
                    activeClassName="active"
                    className={({ isActive }) =>
                        isActive ? "activeDot" : "inactive"
                    }
                >
                    About<span>.</span>
                </Link>
                <Link
                    to="/contact"
                    activeClassName="active"
                    className={({ isActive }) =>
                        isActive ? "activeDot" : "inactive"
                    }
                >
                    Contact<span>.</span>
                </Link>
            </Links>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding: 0px 80px;
    padding-top: 50px;
    padding-bottom: 20px;

    width: 100vw;

    @media (max-width: 767.98px) {
        /* align-items: flex-end; */
        /* padding: 0px 20px; */
        /* justify-content: space-between; */
    }
`;

const Logo = styled.div`
    font-family: "latohairline", Arial, sans-serif;
    font-size: 20px;
    font-weight: 900;
    border: 1px solid #fff;
    /* margin-right: 80vw; */
    padding: 5px 5px;
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    /* a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 10px;
        line-height: 0px;
        span {
            font-size: 75px;
            line-height: 0;
        }
    } */
`;

const Item = styled.a`
    justify-self: left;
    padding-right: 10px;
    font-size: 15px;

    @media (max-width: 767.98px) {
        justify-self: auto;
        padding: 0;
        margin-right: 10px;
    }
`;
