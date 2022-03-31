import React from 'react';
import styled from 'styled-components';

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
    background: linear-gradient(0deg, #ffffff 0%, #f5f5dc 100%);

    width: 100%;
    margin: 0rem 0 4rem 0;
`;

const StyledSpan = styled.span`
    color: #486a73;
    font-weight: 800;
    font-size: 2.4rem;
`;
