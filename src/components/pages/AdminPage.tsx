import React from "react";
import styled from "styled-components";
import PlusMinusIcon from "../atoms/PlusMinusIcon";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";

const AdminPage = () => {
    return (
        <>
            <Header title="관리자 페이지" />
            <Container>
                <PlusMinusIcon isActive />
                <PlusMinusIcon isActive={false} />
                <BlockTitle leftText={"설문 등록 및 수정"} hasRightText={""} />
                <ControllBox>컨트롤 박스 </ControllBox>
                <SurveyListBox>설문 리스트 박스 </SurveyListBox>
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
const ControllBox = styled.div`
    background-color: gray;
    width: 100%;
    height: 20vh;
`;
const SurveyListBox = styled.div`
    background-color: #e3e3e3;
    width: 100%;
    height: 40vh;
`;
