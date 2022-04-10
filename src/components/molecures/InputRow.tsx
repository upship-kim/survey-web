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
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.4rem 0;
`;
const TitleBlock = styled.div`
    display: flex;
    flex: 0.3;
    max-width: 8rem;
    padding: 12px 0;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex: 0.4;
    } ;
`;
const InputBlock = styled.div<{ flexDirection: "row" | "column" }>`
    display: flex;
    flex: 0.7;
    /* height: 100%; */
    justify-content: center;
    flex-direction: ${({ flexDirection }) => flexDirection};
    @media screen and (max-width: 768px) {
        flex: 0.7;
    } ;
`;
