import React from "react";
import styled from "styled-components";
import { OneCardTypes } from "../../types/SelectTypes";
import ArrowIcon from "../atoms/ArrowIcon";
import DefaultText from "../atoms/DefaultText";
import DropBox from "../molecures/DropBox";

interface CardDropProps {
    index: number;
    title: string;
    data?: OneCardTypes;
    isActive: boolean;
    onClick: () => void;
}

const SurveyCard = ({
    index,
    isActive,
    title,
    onClick,
    data,
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
            {isActive && data !== undefined && (
                <DropBox data={data} cardIndex={index} />
            )}
        </>
    );
};

export default React.memo(SurveyCard);

const StyledCard = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f5f5dc;
    margin: 0.4rem 0;
    border: ${({ isActive }) => (isActive ? "1px solid #4E4637" : "0px")};
    cursor: pointer;

    &:hover {
        border: 1px solid #b98900;
        .cube {
            background-color: #b98900;
        }
    }
    @media screen and (max-width: 768px) {
        div {
            height: 1rem;
        }
    } ;
`;
const IndexBlock = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f5dc;
    height: 2rem;
    padding: 1rem;
    width: 3rem;
    font-weight: 800;
    background-color: ${({ isActive }) => (isActive ? "#4E4637" : "#BDA887")};
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
