import React from "react";
import styled from "styled-components";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";
import SurveyCreator from "../templates/SurveyCreator";

const AdminPage = () => {
    return (
        <>
            <Header title="관리자 페이지" />
            <Container>
                <PlusMinusIcon isActive />
                <PlusMinusIcon isActive={false} />
                <BlockTitle leftText={"작성한 설문 리스트"} hasRightText={""} />
                <SurveyListBox>설문 리스트 박스 </SurveyListBox>
                <BlockTitle
                    leftText={"선택 입력사항 등록/수정"}
                    hasRightText={""}
                />
                <SurveyCreator />
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
    background-color: #e3e3e3;
    width: 100%;
    height: 40vh;
`;
