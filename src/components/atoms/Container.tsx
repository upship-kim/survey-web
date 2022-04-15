import React from "react";
import styled from "styled-components";

const Container: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            <StyledWrapper>{children}</StyledWrapper>
        </StyledContainer>
    );
};

export default Container;

const StyledContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    justify-content: center;
    background-color: #fff8ee;
`;
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100%;
    overflow: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        overflow: hidden;
    } ;
`;
