import React from "react";
import styled from "styled-components";
import { OneCardTypes, OneQuestionTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import InputRow from "../molecures/InputRow";
import DetailOptionCreator from "./DetailOptionCreator";

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

interface LocalProps {
    item: OneQuestionTypes;
    onDeleteRow: (rowIndex: number) => void;
}

const DetailCreator = ({ onDeleteRow, item }: LocalProps) => {
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
                <DetailOptionCreator />
            </ThirdProcess>
            <DeleteButton onClick={() => onDeleteRow(item.id)}>
                삭제
            </DeleteButton>
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
`;
const DeleteButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    background: #e3e3e3;
    color: gray;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    &:hover {
        background: #acacac;
        color: black;
    }
`;
