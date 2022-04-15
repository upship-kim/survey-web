import React from "react";
import styled from "styled-components";

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledSpan>{title}</StyledSpan>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background: #fff8ee;

    width: 100%;
    margin: 0 0 4rem 0;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        height: 10vh;
    } ;
`;

const StyledSpan = styled.span`
    color: #486a73;
    font-weight: 800;
    font-size: 2.4rem;
    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    } ;
`;
