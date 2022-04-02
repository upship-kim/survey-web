import React from "react";
import styled from "styled-components";
type sizeType = "large" | "medium" | "small";
interface LabelProps {
    text: string;
    size?: sizeType;
    bold?: boolean;
    htmlFor?: string;
}
const DefaultLabel = ({ text, size = "medium", bold, htmlFor }: LabelProps) => {
    return (
        <Wrapper>
            <StyledLabel size={size} bold={bold} htmlFor={htmlFor}>
                {text}
            </StyledLabel>
        </Wrapper>
    );
};

export default DefaultLabel;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: max-content;
    cursor: pointer;
`;
const StyledLabel = styled.label<{ size: sizeType; bold?: boolean }>`
    font-size: ${props =>
        props.size === "large"
            ? "1.2rem"
            : props.size === "small"
            ? "0.8rem"
            : "1rem"};
    color: #7a7a7a;
    cursor: pointer;
    width: max-content;

    font-weight: ${({ bold }) => (bold ? 800 : 600)};
`;
