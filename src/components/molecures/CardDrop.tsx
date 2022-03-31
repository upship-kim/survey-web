import React from 'react';
import styled from 'styled-components';
import DefaultText from '../atoms/DefaultText';

interface CardDropProps {
    index: number;
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const CardDrop = ({ index, isActive, title, onClick }: CardDropProps) => {
    return (
        <>
            <StyledCard isActive={isActive} onClick={onClick}>
                <StyledBox className="cube" isActive={isActive}>
                    {index + 1}
                </StyledBox>
                <StyledTitleBox>
                    <DefaultText text={title} size="large" />
                </StyledTitleBox>
                <StyledArrowBox />
            </StyledCard>
            {isActive && (
                <div>
                    안녕하세요 !!!!
                    <br />
                    안녕하세요 !!!!
                </div>
            )}
        </>
    );
};

export default CardDrop;

const StyledCard = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    padding: 0rem;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f5f5dc;
    margin: 1rem 0;
    border: ${({ isActive }) => (isActive ? '1px solid #d8a23a' : '0px')};
    cursor: pointer;

    &:hover {
        border: 1px solid #d8a23a;
        .cube {
            background-color: #d8a23a;
        }
    }
`;
const StyledBox = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f5dc;
    height: 2rem;
    padding: 1rem;
    width: 3rem;
    background-color: ${({ isActive }) => (isActive ? '#d8a23a' : '#8eb3a2')};
`;

const StyledTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    color: #8eb3a2;
    height: 2rem;
    padding: 1rem;
    width: 100%;
`;
const StyledArrowBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8eb3a2;
    height: 2rem;
    padding: 1rem;
    width: 3rem;
`;
