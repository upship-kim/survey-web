import React from "react";
import styled from "styled-components";
import { OneCardTypes } from "../../types/SelectTypes";
import QuestionWrapper from "./QuestionWrapper";

interface LocalProps {
    data: OneCardTypes;
    cardIndex: number;
}

const DropBox = ({ data, cardIndex }: LocalProps) => {
    return (
        <Wrapper>
            {data.map(item => (
                <QuestionWrapper
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    options={item.options}
                    cardIndex={cardIndex}
                />
            ))}
        </Wrapper>
    );
};

export default DropBox;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
