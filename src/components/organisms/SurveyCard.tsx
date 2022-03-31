import React from 'react';
import styled from 'styled-components';
import { OneCardTypes, OneQuestionTypes } from '../../types/SelectTypes';
import ArrowIcon from '../atoms/ArrowIcon';
import DefaultText from '../atoms/DefaultText';
import DropContent from '../molecures/DropContent';

interface CardDropProps {
    index: number;
    title: string;
    rowDatas?: any;
    isActive: boolean;
    onClick: () => void;
}

const SurveyCard = ({
    index,
    isActive,
    title,
    onClick,
    rowDatas,
}: CardDropProps) => {
    return (
        <>
            <StyledCard isActive={isActive} onClick={onClick}>
                <IndexBlock className="cube" isActive={isActive}>
                    {index + 1}
                </IndexBlock>
                <TitleBlock>
                    <DefaultText text={title} size="large" />
                </TitleBlock>
                <IconBlock>
                    <ArrowIcon isActive={isActive} />
                </IconBlock>
            </StyledCard>
            {isActive && <DropContent rowDatas={rowDatas} />}
        </>
    );
};

export default SurveyCard;

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
    margin: 0.4rem 0;
    border: ${({ isActive }) => (isActive ? '1px solid #d8a23a' : '0px')};
    cursor: pointer;

    &:hover {
        border: 1px solid #d8a23a;
        .cube {
            background-color: #d8a23a;
        }
    }
`;
const IndexBlock = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f5dc;
    height: 2rem;
    padding: 1rem;
    width: 3rem;
    background-color: ${({ isActive }) => (isActive ? '#d8a23a' : '#8eb3a2')};
`;

const TitleBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    color: #8eb3a2;
    height: 2rem;
    padding: 1rem;
    width: 100%;
`;
const IconBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8eb3a2;
    height: 2rem;
    padding: 1rem;
    width: 3rem;
`;
