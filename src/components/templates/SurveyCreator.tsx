import React, { useState } from "react";
import styled from "styled-components";
import { CardTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultLabel from "../atoms/DefaultLabel";
import DefaultSelect from "../atoms/DefaultSelect";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
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
const kindOfOptions = [
    {
        name: "단일 선택형 (단일 선택 적합)",
        type: 1,
    },
    {
        name: "체크 박스형 (3개 이하 선택)",
        type: 2,
    },
    {
        name: "셀렉트 박스형 (4개 이상 선택)",
        type: 3,
    },
    {
        name: "직접 입력형",
        type: 0,
    },
];

const SurveyCreator = () => {
    const [formData, setFormData] = useState<CardTypes[]>();
    const [isEtc, setIsEtc] = useState<boolean>(true);
    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };
    return (
        <Container>
            <FirstProcess>
                <InputRow title="설문 제목" flexDirection="column">
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
            <SecondProcess>
                <InputRow title="세부 제목">
                    <DefaultInput type="text" />
                </InputRow>
                <InputRow title="옵션 유형">
                    <DefaultSelect
                        options={kindOfOptions}
                        onChange={onSelect}
                    />
                </InputRow>
                <InputRow title="옵션명" flexDirection="column">
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />

                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />
                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />
                        <PlusMinusIcon isActive={false} />
                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                </InputRow>
            </SecondProcess>
            <ThirdProcess>
                <InputRow title="세부옵션 제목">
                    <DefaultInput type="text" />
                </InputRow>
                <InputRow title="세부옵션 유형">
                    <DefaultSelect
                        options={kindOfOptions}
                        onChange={onSelect}
                    />
                </InputRow>
                <InputRow title="옵션명" flexDirection="column">
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />

                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />
                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                    <EachOptionRow>
                        <DefaultInput type="text" placeholder={`옵션1`} />
                        <PlusMinusIcon isActive={false} />
                        <PlusMinusIcon isActive={true} />
                    </EachOptionRow>
                </InputRow>
            </ThirdProcess>
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
    flex: 0.7;
    flex-direction: column;
    background: white;
`;
const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 0.3;
    align-self: flex-start;
`;

const SecondProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: white;
`;

const EachOptionRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
`;

const ThirdProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: white;
`;
