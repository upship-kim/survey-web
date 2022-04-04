import React, { useState } from "react";
import styled from "styled-components";
import { CardTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultLabel from "../atoms/DefaultLabel";
import InputRow from "../molecures/InputRow";

const options = [
    {
        name: "Y",
        value: true,
    },
    {
        name: "N",
        value: false,
    },
];

const SurveyCreator = () => {
    const [formData, setFormData] = useState<CardTypes[]>();
    const [isEtc, setIsEtc] = useState<boolean>(true);
    return (
        <Container>
            <FirstProcess>
                <InputRow title="대제목">
                    <DefaultInput type="text" />
                </InputRow>
                <InputRow title="기타사항 추가">
                    {options.map(item => (
                        <StyledRow>
                            <DefaultInput
                                type={"radio"}
                                id={item.name}
                                checked={item.value === isEtc}
                                onChange={() => setIsEtc(item.value)}
                            />
                            <DefaultLabel
                                text={item.name}
                                htmlFor={item.name}
                            />
                        </StyledRow>
                    ))}
                </InputRow>
            </FirstProcess>
            <SecondProcess>222</SecondProcess>
            <ThirdProcess>333</ThirdProcess>
        </Container>
    );
};

export default SurveyCreator;

const Container = styled.div`
    display: flex;
    background-color: #eee;
    flex-direction: row;

    padding: 1rem;
`;

const CommonDiv = styled.div`
    display: flex;
    flex: 1;
    padding: 1rem;
    flex-direction: column;
`;
const FirstProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: white;
`;
const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const SecondProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: gray;
`;
const ThirdProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: white;
`;
