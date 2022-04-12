import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoginAtom } from "../../atom/SurveyAtom";
import { cardInitForm } from "../../FormData/initData";
import { client } from "../../lib/client";
import { CardTypes } from "../../types/SelectTypes";
import DefaultButton from "../atoms/DefaultButton";
import DefaultText from "../atoms/DefaultText";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";
import SurveyCreator from "../templates/SurveyCreator";

export type ModeType = "read" | "create" | "modify";

const AdminPage = () => {
    const [fetchData, setFetchData] = useState<CardTypes[]>([]);
    const [form, setForm] = useState<CardTypes>(cardInitForm);
    const [itemId, setItemId] = useState<number | null>(null);
    const [mode, setMode] = useState<ModeType>("read");
    const setIsLogin = useSetRecoilState<boolean>(isLoginAtom);
    const navigation = useNavigate();

    const notLogin = (e: any) => {
        if (e.response.status === 401) {
            setIsLogin(false);
            alert("로그인이 필요합니다");
            navigation("/admin");
        }
    };
    useEffect(() => {
        fetchList();
    }, []);

    useEffect(() => {
        if (itemId && mode !== "create") {
            setForm(fetchData.filter(item => item.id === itemId)[0]);
        }
        if (mode === "create") setForm(cardInitForm);
    }, [fetchData, itemId, mode]);

    const fetchList = async () => {
        const response = await client.get("api/admin");
        setFetchData(response.data.data);
    };
    const fetchSaveForm = async () => {
        try {
            const response = await client.post("api/admin", form);
            const { success, message } = response.data;
            alert(message);
            if (success) {
                fetchList();
            }
        } catch (e) {
            notLogin(e);
        }
    };
    const fetchUpdateForm = async () => {
        try {
            const response = await client.patch(`api/admin/${form.id}`, form);
            const { success, message } = response.data;
            alert(message);
            if (success) fetchList();
        } catch (e: any) {
            notLogin(e);
        }
    };
    const fetchDeleteForm = async (id: number) => {
        try {
            if (window.confirm("정말 삭제하시겠습니까?")) {
                const response = await client.delete(`api/admin/${id}`);
                const { message } = response.data;
                alert(message);
                setItemId(null);
                setForm(cardInitForm);
                fetchList();
            } else {
                return;
            }
        } catch (e) {
            notLogin(e);
        }
    };

    const onClick = (id: number) => {
        setItemId(id);
        setMode("read");
    };

    const onChangeMode = (mode: ModeType) => {
        setMode(mode);
        if (mode === "create") {
            setItemId(null);
            window.scrollTo(0, 10000);
        }
    };
    const onSubmit = (isMode: string) => {
        switch (isMode) {
            case "modify":
                fetchUpdate();
                return;
            case "create":
                fetchCreate();

                return;

            default:
                return;
        }
    };
    const fetchUpdate = async () => {
        try {
            fetchUpdateForm();
            setMode("read");
        } catch (error) {}
    };
    const fetchCreate = async () => {
        try {
            fetchSaveForm();
            setMode("read");
        } catch (error) {}
    };

    return (
        <>
            <Header title="관리자 페이지" />
            <Container>
                <BlockTitle leftText={"작성한 설문 리스트"} hasRightText={""}>
                    <DefaultButton
                        onClick={() => onChangeMode("create")}
                        text={"설문 추가"}
                        type="create"
                    />
                </BlockTitle>
                <SurveyListBox>
                    {fetchData.length > 0 ? (
                        fetchData.map((item, index) => (
                            <SurveyRow
                                isActive={item.id === itemId}
                                onClick={() => onClick(item.id)}
                                key={item.id}
                            >
                                {item.title}
                                <div onClick={() => fetchDeleteForm(item.id)}>
                                    삭제
                                </div>
                            </SurveyRow>
                        ))
                    ) : (
                        <NoContents>
                            <DefaultText
                                text="작성된 설문이 없습니다."
                                bold
                                size={"large"}
                            />
                        </NoContents>
                    )}
                </SurveyListBox>
                {(itemId || mode === "create") && (
                    <>
                        <BlockTitle
                            leftText={`선택 입력사항 ${
                                mode === "create"
                                    ? "추가"
                                    : mode === "modify"
                                    ? "수정"
                                    : ""
                            }`}
                            hasRightText={""}
                        >
                            <ButtonRow>
                                {mode !== "create" && (
                                    <DefaultButton
                                        onClick={() =>
                                            onChangeMode(
                                                mode === "read"
                                                    ? "modify"
                                                    : "read",
                                            )
                                        }
                                        text={
                                            mode === "read"
                                                ? "편집모드"
                                                : "읽기모드"
                                        }
                                        type="cancle"
                                    />
                                )}
                                {mode !== "read" && (
                                    <DefaultButton
                                        onClick={() => onSubmit(mode)}
                                        text={
                                            mode === "modify"
                                                ? "수정하기"
                                                : "저장하기"
                                        }
                                        type="submit"
                                    />
                                )}
                            </ButtonRow>
                        </BlockTitle>

                        <SurveyCreator
                            mode={mode}
                            form={form}
                            setForm={setForm}
                        />
                    </>
                )}
            </Container>
        </>
    );
};

export default AdminPage;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
`;

const SurveyListBox = styled.div`
    width: 100%;
    min-height: 40vh;
    margin-bottom: 2rem;
`;
const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    column-gap: 20px;
`;

const SurveyRow = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    color: ${({ isActive }) => (isActive ? "#ffffff" : "gray")};
    background-color: ${({ isActive }) => (isActive ? "#8eb3a2" : "#eee")};
    border-radius: 10px;
    padding: 1rem;
    justify-content: space-between;
    cursor: pointer;
    & + & {
        margin-top: 10px;
    }
`;
const NoContents = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
`;
