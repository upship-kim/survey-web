import React from "react";
import styled from "styled-components";
type buttonTypes = "submit" | "cancle" | "create";
interface ButtonProps {
    onClick: () => void;
    text: string;
    type: buttonTypes;
}

const DefaultButton = ({ onClick, text, type }: ButtonProps) => {
    return (
        <Styledbutton onClick={onClick} type={type}>
            {text}
        </Styledbutton>
    );
};

export default DefaultButton;

const Styledbutton = styled.div<{ type: buttonTypes }>`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0.6rem 2rem;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    background: ${({ type }) =>
        type === "cancle"
            ? "#eeeeee"
            : type === "submit"
            ? "#4E4637"
            : "#83B5A6"};
    color: ${({ type }) => (type === "cancle" ? "gray" : "#FFF8EE")};
`;
