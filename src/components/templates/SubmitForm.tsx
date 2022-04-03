import React from "react";
import styled from "styled-components";
import DefaultButton from "../atoms/DefaultButton";

interface LocalPorps {
    onSubmit: () => void;
}

const SubmitForm = ({ onSubmit }: LocalPorps) => {
    return (
        <Wrapper>
            <DefaultButton text="문의하기" onClick={onSubmit} type="submit" />
        </Wrapper>
    );
};

export default SubmitForm;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 96%;
    height: 100%;
    padding: 2rem 0rem;
`;
