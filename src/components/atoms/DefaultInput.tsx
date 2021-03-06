import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const DefaultInput = ({ ...props }: InputProps) => {
    return <StyledInput {...props} />;
};

export default DefaultInput;

const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 1rem;
    padding: 12px;
    border: 0px solid gray;
    border-bottom: 1px solid #acacac;
    outline: none;
    background-color: transparent;
    & input[checkbox] {
        cursor: pointer;
    }
    & input[radio] {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid #3f59cf;
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #aaaaaa;
    }
    &:-ms-input-placeholder {
        color: #aaaaaa;
    }
    &:invalid {
        background-color: #eeeeee;
    }
`;
