import React from "react";
import styled from "styled-components";
import DefaultText from "../atoms/DefaultText";

interface InputRowProps {
    title: string;
    isRequire?: boolean;
    flexDirection?: "row" | "column";
}

const InputRow: React.FC<InputRowProps> = ({
    title,
    flexDirection = "row",
    children,
    isRequire = false,
}) => {
    return (
        <Wrapper>
            <TitleBlock>
                <DefaultText text={title} isRequire={isRequire} />
            </TitleBlock>
            <InputBlock flexDirection={flexDirection}>{children}</InputBlock>
        </Wrapper>
    );
};

export default InputRow;

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.4rem 0;
`;
const TitleBlock = styled.div`
    display: flex;
    flex: 0.2;
    padding: 12px 0;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex: 0.4;
    } ;
`;
const InputBlock = styled.div<{ flexDirection: "row" | "column" }>`
    display: flex;
    flex: 0.8;
    justify-content: left;
    align-items: ${({ flexDirection }) =>
        flexDirection === "column" ? "left" : "center"};
    flex-direction: ${({ flexDirection }) => flexDirection};
    @media screen and (max-width: 768px) {
        flex: 0.7;
    } ;
`;
