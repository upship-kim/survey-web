import React from "react";
import styled from "styled-components";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import InputRow from "../molecures/InputRow";

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
const DetailCreator = () => {
    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };
    return (
        <OptionBlock>
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
                <InputRow title="세부옵션명" flexDirection="column">
                    <DetailEachOptionRow>
                        <DetailOptionRow>
                            <DefaultInput type="text" placeholder={`옵션1`} />
                            <DefaultInput
                                type="text"
                                placeholder={`이미지 url`}
                            />
                        </DetailOptionRow>
                        <DetailIconColumn>
                            <PlusMinusIcon isActive={true} />
                        </DetailIconColumn>
                    </DetailEachOptionRow>
                    <DetailEachOptionRow>
                        <DetailOptionRow>
                            <DefaultInput type="text" placeholder={`옵션1`} />
                            <DefaultInput
                                type="text"
                                placeholder={`이미지 url`}
                            />
                        </DetailOptionRow>
                        <DetailIconColumn>
                            <PlusMinusIcon isActive={false} />
                            <PlusMinusIcon isActive={true} />
                        </DetailIconColumn>
                    </DetailEachOptionRow>
                </InputRow>
            </ThirdProcess>
        </OptionBlock>
    );
};

export default DetailCreator;

const OptionBlock = styled.div`
    display: flex;
    border-radius: 12px;
    flex-direction: row;
    & + & {
        margin-top: 1rem;
    }
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
const SecondProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: white;
`;

const EachOptionRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 6px;
`;

const ThirdProcess = styled(CommonDiv)`
    display: flex;
    flex-direction: column;
    background: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;
const DetailEachOptionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
`;
const DetailOptionRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    column-gap: 6px;
`;
const DetailIconColumn = styled.div`
    display: flex;
    column-gap: 6px;
    flex-direction: row;
`;
