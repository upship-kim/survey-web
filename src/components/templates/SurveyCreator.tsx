import React, { useState } from "react";
import styled from "styled-components";
import { CardTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultLabel from "../atoms/DefaultLabel";
import DefaultSelect from "../atoms/DefaultSelect";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import InputRow from "../molecures/InputRow";
import DetailCreator from "../organisms/DetailCreator";

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
            <TitleBlock>
                <FirstProcess>
                    <InputRow title="설문 제목" flexDirection="column">
                        <DefaultInput type="text" style={{ width: "80%" }} />
                    </InputRow>
                    <InputRow title="기타입력사항">
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
            </TitleBlock>
            {[
                ...new Array(4)
                    .fill("")
                    .map((item, index) => <DetailCreator key={index} />),
            ]}
        </Container>
    );
};

export default SurveyCreator;

const Container = styled.div`
    display: flex;
    background-color: #eee;
    flex-direction: column;
    padding: 1rem;
`;
const TitleBlock = styled.div`
    margin-bottom: 1rem;
    border-radius: 12px;
`;

const CommonDiv = styled.div`
    display: flex;
    flex: 1;
    padding: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    & + & {
        border-left: 1px dotted gray;
    }
`;
const FirstProcess = styled(CommonDiv)`
    display: flex;
    width: 47%;
    flex-direction: column;
    border-radius: 20px;
    background: white;
`;
const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 0.3;
    padding: 12px 0;
`;
