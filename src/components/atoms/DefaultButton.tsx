import React from 'react';
import styled from 'styled-components';
type buttonTypes = 'submit' | 'cancle';
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
    width: 6rem;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 0px solid gray;
    padding: 0.6rem 2rem;
    font-size: 1.1rem;
    font-weight: 800;
    background: ${({ type }) => (type === 'cancle' ? '#eeeeee' : '#204669')};
    color: ${({ type }) => (type === 'cancle' ? 'gray' : '#eeeeee')};
`;
