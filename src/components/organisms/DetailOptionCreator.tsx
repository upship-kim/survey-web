import React, { useEffect } from "react";
import styled from "styled-components";
import {
    CardTypes,
    FirstOptionTypes,
    OneQuestionTypes,
    SecondsOptionTypes,
} from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import DefaultText from "../atoms/DefaultText";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import InputRow from "../molecures/InputRow";
import { ModeType } from "../pages/AdminPage";
import { kindOfOptions } from "./DetailCreator";

interface LocalProps {
    optionIndex: number;
    item: OneQuestionTypes;
    setForm: React.Dispatch<React.SetStateAction<CardTypes>>;
    index: number;
    mode: ModeType;
}
const DetailOptionCreator = ({
    optionIndex = 0,
    item,
    setForm,
    index,
    mode,
}: LocalProps) => {
    const target =
        (item.options as FirstOptionTypes[])[optionIndex as number] !==
        undefined
            ? (item.options as FirstOptionTypes[])[optionIndex as number]
            : (item.options as FirstOptionTypes[])[0];

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value: type } = e.target;
        const tempArray = item.options?.slice() as FirstOptionTypes[];

        tempArray[optionIndex].options =
            Number(type) > 0 ? [{ id: 1, name: "", img: "" }] : [];
        tempArray[optionIndex].type = Number(type);

        const temp = {
            ...item,
            options: tempArray,
        };
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    useEffect(() => {}, [item, optionIndex, target]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const tempArray = item.options?.slice() as FirstOptionTypes[];
        tempArray[optionIndex][name] = value;
        const temp = { ...item, options: tempArray };
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };

    const onOptionChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        num: number,
    ) => {
        const { name, value } = e.target;
        const optionArray: FirstOptionTypes[] =
            item?.options?.slice() as FirstOptionTypes[];
        const detailOptionArray = (
            target.options as SecondsOptionTypes[]
        ).slice();
        detailOptionArray[num][name] = value;
        optionArray[optionIndex].options = detailOptionArray;

        const temp = { ...item, options: optionArray };

        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };

    const onAddOption = () => {
        const optionArray2: FirstOptionTypes[] =
            item?.options?.slice() as FirstOptionTypes[];

        const detailOptionArray = (
            target.options as SecondsOptionTypes[]
        ).slice();

        if (detailOptionArray.length === 0) {
            detailOptionArray.push({
                name: "",
                img: "",
                id: 1,
            });
        } else {
            detailOptionArray.push({
                name: "",
                img: "",
                id: detailOptionArray[detailOptionArray.length - 1].id + 1,
            });
        }
        optionArray2[optionIndex].options = detailOptionArray;
        const tempRow = { ...item, options: optionArray2 };
        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = tempRow;
            return tempForm;
        });
    };
    const onDeleteOption = (id: number) => {
        const optionArray: FirstOptionTypes[] =
            item?.options?.slice() as FirstOptionTypes[];

        const detailOptionArray = (
            target.options as SecondsOptionTypes[]
        ).slice();

        if (detailOptionArray.length === 1) return;
        const newTemp = detailOptionArray.filter(item => item.id !== id);
        optionArray[optionIndex].options = newTemp;

        const temp = { ...item, options: optionArray };

        setForm(prev => {
            const tempForm = { ...prev };
            tempForm.rows[index] = temp;
            return tempForm;
        });
    };
    return (
        <>
            <DefaultText
                text={`'${
                    optionIndex !== undefined ? target?.name : ""
                }' ?????? ?????? ??????`}
                bold
                size="large"
            />
            <InputRow title={`?????? ?????? ??????`}>
                <DefaultSelect
                    name={"type"}
                    options={kindOfOptions}
                    onChange={onSelect}
                    value={target?.type}
                    disabled={mode === "read"}
                />
            </InputRow>
            {target?.type !== 4 && (
                <InputRow title={`?????? ?????????`}>
                    <DefaultInput
                        type="text"
                        name={"detailTitle"}
                        value={target?.detailTitle || ""}
                        onChange={onChange}
                        placeholder={`${
                            target?.name.length < 1 ? "?????? ??????" : target?.name
                        } ??? ?????? ???????????? ??????????????????`}
                        disabled={mode === "read"}
                    />
                </InputRow>
            )}
            {target?.type > 0 && target?.type < 4 && (
                <InputRow title="?????? ?????????" flexDirection="column">
                    {target?.options !== undefined &&
                        target.options.map((detail, num) => (
                            <DetailEachOptionRow key={detail.id}>
                                <DetailOptionRow>
                                    <DefaultInput
                                        type="text"
                                        name={"name"}
                                        placeholder={`???????????? ??????????????????`}
                                        onChange={e => onOptionChange(e, num)}
                                        value={detail.name}
                                        disabled={mode === "read"}
                                    />
                                    <DefaultInput
                                        type="text"
                                        name={"img"}
                                        placeholder={`????????? ??????(url)??? ??????????????????`}
                                        onChange={e => onOptionChange(e, num)}
                                        value={detail.img}
                                        disabled={mode === "read"}
                                    />
                                </DetailOptionRow>
                                <DetailIconColumn>
                                    {mode !== "read" &&
                                        target?.options?.length === num + 1 && (
                                            <PlusMinusIcon
                                                isActive={false}
                                                onClick={onAddOption}
                                            />
                                        )}
                                    {mode !== "read" &&
                                        target?.options?.length !== 1 && (
                                            <PlusMinusIcon
                                                isActive={true}
                                                onClick={() =>
                                                    onDeleteOption(detail.id)
                                                }
                                            />
                                        )}
                                </DetailIconColumn>
                            </DetailEachOptionRow>
                        ))}
                </InputRow>
            )}
        </>
    );
};

export default DetailOptionCreator;

const DetailEachOptionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    background-color: #e3e3e3;
    padding: 1rem;
    border-radius: 10px;
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
