import React from "react";
import Container from "../atoms/Container";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";
import BasicForm from "../templates/BasicForm";
import SelectForm from "../templates/SelectForm";
import SubmitForm from "../templates/SubmitForm";

const SurveyPage = () => {
    const onSubmit = () => {
        alert("submit");
    };

    return (
        <>
            <Header title="견적 문의" />
            <Container>
                <BlockTitle leftText={"기본입력사항"} />
                <BasicForm />
                <BlockTitle
                    leftText={"선택입력사항"}
                    hasRightText={
                        "아래 사항은 선택 입력 사항이며 입력 시 보다 자세한 상담 및 견적이 가능합니다."
                    }
                />
                <SelectForm />

                <SubmitForm onSubmit={onSubmit} />
            </Container>
        </>
    );
};

export default SurveyPage;
