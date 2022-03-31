import React from 'react';
import styled from 'styled-components';

interface TextProps {
    text: string;
}
const DefaultTitle = ({ text }: TextProps) => {
    return <StyledSpan>{text}</StyledSpan>;
};

export default DefaultTitle;

const StyledSpan = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: #414141;
`;
