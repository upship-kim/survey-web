import React, { useState } from "react";
import styled from "styled-components";
import {
    CardTypes,
    OneQuestionTypes,
    FirstOptionTypes,
} from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import InputRow from "../molecures/InputRow";
import { ModeType } from "../pages/AdminPage";
import DetailOptionCreator from "./DetailOptionCreator";

export const kindOfOptions = [
    {
        name: "직접 입력형",
        type: 0,
    },
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
];

interface LocalProps {
    item: OneQuestionTypes;
    index: number;
    onDeleteRow: (id: number) => void;
    setForm: React.Dispatch<React.SetStateAction<CardTypes>>;
    mode: ModeType;
}

const DetailCreator = ({
    onDeleteRow,
    item,
    setForm,
    index,
    mode,
}: LocalProps) => {
    const [optionIndex, setOptionIndex] = useState<number>(0);

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value: type } = e.target;

        const temp = {
            ...item,
            [name]: Number(type),
            options:
                Number(type) > 0
                    ? [
                          {
                              id: 1,
                              name: "",
                              type: 0,
                              detailTitle: "",
                              options: [],
                          },
                      ]
                    : [],
        };
        console.log(item, temp);
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const temp = { ...item, [name]: value };
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    const onOptionChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionIndex: number,
    ) => {
        const { value } = e.target;
        const optionArray: FirstOptionTypes[] =
            item?.options?.slice() as FirstOptionTypes[];
        optionArray[optionIndex].name = value;
        const temp = { ...item, options: optionArray };

        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    const onAddOption = () => {
        const temp = { ...item };
        if (item.options?.length === 0) {
            item.options.push({
                id: 1,
                name: "",
                type: 0,
                detailTitle: "",
                options: [],
            });
        } else {
            temp?.options?.push({
                name: "",
                type: 0,
                detailTitle: "",
                options: [],
                id:
                    (
                        item.options![
                            item.options!.length! - 1
                        ] as FirstOptionTypes
                    ).id + 1,
            });
        }
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    const onDeleteOption = (id: number) => {
        // console.log(id);
        if (item.options?.length === 1) return;
        const newTemp = item.options?.filter(item => item.id !== id);
        const temp = { ...item, options: newTemp };

        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    const onOptionFocus = (optionIndex: number) => {
        setOptionIndex(optionIndex);
    };
    return (
        <OptionBlock>
            <SecondProcess>
                <InputRow title="세부 제목">
                    <DefaultInput
                        type="text"
                        name={"title"}
                        onChange={onChange}
                        value={item.title}
                        placeholder={`설문 항목의 세부 제목을 입력해주세요`}
                        disabled={mode === "read"}
                    />
                </InputRow>
                <InputRow title="옵션 유형">
                    <DefaultSelect
                        name={"type"}
                        options={kindOfOptions}
                        onChange={onSelect}
                        value={item.type}
                        disabled={mode === "read"}
                    />
                </InputRow>
                {item.type > 0 && (
                    <InputRow title="옵션명" flexDirection="column">
                        {item.options !== undefined &&
                            item.options?.map((option, index) => (
                                <EachOptionRow key={option.id}>
                                    <DefaultInput
                                        type="text"
                                        name={"name"}
                                        placeholder={`옵션명`}
                                        value={option.name}
                                        onChange={e => onOptionChange(e, index)}
                                        onFocus={() => onOptionFocus(index)}
                                        readOnly={mode === "read"}
                                        style={{
                                            borderBottom:
                                                optionIndex === index
                                                    ? "2px solid #142fb9"
                                                    : "",
                                        }}
                                    />
                                    {mode !== "read" &&
                                        item.options?.length === index + 1 && (
                                            <PlusMinusIcon
                                                isActive={false}
                                                onClick={onAddOption}
                                            />
                                        )}
                                    {mode !== "read" &&
                                        item.options?.length !== 1 && (
                                            <PlusMinusIcon
                                                isActive={true}
                                                onClick={() =>
                                                    onDeleteOption(option.id)
                                                }
                                            />
                                        )}
                                </EachOptionRow>
                            ))}
                    </InputRow>
                )}
            </SecondProcess>
            {item.type > 0 && (
                <ThirdProcess>
                    <DetailOptionCreator
                        index={index}
                        optionIndex={optionIndex}
                        item={item}
                        setForm={setForm}
                        mode={mode}
                    />
                </ThirdProcess>
            )}
            {mode !== "read" && index !== 0 && (
                <DeleteButton onClick={() => onDeleteRow(item.id)}>
                    삭제
                </DeleteButton>
            )}
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
    min-height: 10rem;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: white;
`;
const DeleteButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
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
