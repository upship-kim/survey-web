import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardTypes } from "../../types/SelectTypes";
import DefaultButton from "../atoms/DefaultButton";
import DefaultInput from "../atoms/DefaultInput";
import InputRow from "../molecures/InputRow";
import DetailCreator from "../organisms/DetailCreator";

const initForm: CardTypes = {
    id: 1,
    title: "",
    rows: [
        {
            id: 1,
            title: "",
            type: 1,
            options: [
                {
                    id: 1,
                    name: "",
                    type: 1,
                    detailTitle: "",
                    options: [{ id: 1, name: "", img: "" }],
                },
            ],
        },
    ],
};

const SurveyCreator = () => {
    const [totalData, setTotalData] = useState<CardTypes[]>();
    const [form, setForm] = useState<CardTypes>(initForm);
    const [rowId, setRowId] = useState<number>(1);
    const [isEtc, setIsEtc] = useState<boolean>(true);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const onAddRow = () => {
        const temp = { ...form };
        console.log(form.rows[form.rows.length - 1].id + 1);
        temp.rows.push({
            ...temp.rows[0],
            id: Number(form.rows[form.rows.length - 1].id + 1),
        });
        setForm(temp);
    };
    const onDeleteRow = (id: number) => {
        const temp = { ...form };
        const newTemp = temp.rows.filter((item, num: number) => item.id !== id);
        temp.rows = newTemp;
        setForm(temp);
    };

    useEffect(() => {
        return () => {};
    }, [form]);

    return (
        <Container>
            <TitleBlock>
                <FirstProcess>
                    <InputRow title="설문 제목" flexDirection="column">
                        <DefaultInput
                            type="text"
                            name="title"
                            style={{ width: "80%" }}
                            value={form.title}
                            onChange={onChange}
                        />
                    </InputRow>
                </FirstProcess>
            </TitleBlock>
            <AddButtonRow>
                <DefaultButton
                    type="submit"
                    text="세부항목 추가"
                    onClick={onAddRow}
                />
            </AddButtonRow>
            {form.rows.map((item, index) => (
                <DetailCreator
                    key={index}
                    item={item}
                    onDeleteRow={onDeleteRow}
                />
            ))}
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
const AddButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    padding: 12px 0;
`;
