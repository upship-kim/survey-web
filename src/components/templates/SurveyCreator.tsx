import React, { useEffect } from "react";
import styled from "styled-components";
import { rowInit } from "../../FormData/initData";
import { CardTypes } from "../../types/SelectTypes";
import DefaultButton from "../atoms/DefaultButton";
import DefaultInput from "../atoms/DefaultInput";
import InputRow from "../molecures/InputRow";
import DetailCreator from "../organisms/DetailCreator";
import { ModeType } from "../pages/AdminPage";

interface LocalProps {
    mode: ModeType;
    form: CardTypes;
    setForm: React.Dispatch<React.SetStateAction<CardTypes>>;
}

const SurveyCreator = ({ mode, form, setForm }: LocalProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const onAddRow = () => {
        const temp = { ...form };
        if (form.rows.length === 0) {
            temp.rows.push(rowInit);
        } else {
            temp.rows.push({
                title: "",
                type: 0,
                options: [],
                id: form.rows[form.rows.length - 1].id + 1,
            });
        }
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
        <Container mode={mode}>
            <TitleBlock>
                <FirstProcess>
                    <InputRow title="설문 제목" flexDirection="column">
                        <DefaultInput
                            type="text"
                            name="title"
                            style={{ width: "80%" }}
                            value={form.title}
                            onChange={onChange}
                            placeholder={"설문 항목의 타이틀 명을 입력해주세요"}
                            disabled={mode === "read"}
                        />
                    </InputRow>
                </FirstProcess>
            </TitleBlock>
            {mode !== "read" && (
                <AddButtonRow>
                    <DefaultButton
                        type="cancle"
                        text="세부항목 추가"
                        onClick={onAddRow}
                    />
                </AddButtonRow>
            )}
            {form &&
                form.rows.map((item, index) => (
                    <DetailCreator
                        key={item.id}
                        index={index}
                        item={item}
                        setForm={setForm}
                        onDeleteRow={onDeleteRow}
                        mode={mode}
                    />
                ))}
        </Container>
    );
};

export default SurveyCreator;

const Container = styled.div<{ mode: ModeType }>`
    display: flex;
    background-color: ${({ mode }) => (mode !== "create" ? "#eee" : "#b7dcd1")};
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

const AddButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    padding: 12px 0;
`;
