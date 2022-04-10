import React from "react";
import styled from "styled-components";
import DefaultText from "../atoms/DefaultText";

interface BlockTitleProps {
    leftText: string;
    hasRightText?: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({
    leftText,
    hasRightText,
    children,
}) => {
    return (
        <Wrapper>
            <DefaultText text={leftText} size="large" bold />
            {hasRightText !== undefined && (
                <DefaultText text={hasRightText} size="small" />
            )}
            {children}
        </Wrapper>
    );
};

export default BlockTitle;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.8rem 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #acacac;
    margin: 1.4rem 0;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
        margin: 0rem 0;
    } ;
`;
