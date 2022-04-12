import React from "react";
import { useRecoilValue } from "recoil";
import { basicFormAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import { requestForm } from "../../FormData/requestForm";
import { client } from "../../lib/client";
import Container from "../atoms/Container";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";
import BasicForm from "../templates/BasicForm";
import SelectForm from "../templates/SelectForm";
import SubmitForm from "../templates/SubmitForm";

const SurveyPage = () => {
    const basicState = useRecoilValue(basicFormAtom);
    const selectedState = useRecoilValue(selectedFormAtom);

    const onSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const isVaild = Object.entries(basicState).find(
            item => item[1] === "" || item[1] === "선택",
        );
        if (isVaild !== undefined) {
            alert(
                `${
                    requestForm.find(item => item.props.name === isVaild[0])
                        ?.title
                } 를 입력해주세요`,
            );
        } else {
            try {
                await client.post("/api/survey", {
                    basicInfo: basicState,
                    selectedInfo: selectedState,
                });
            } catch (e) {
                console.log(e);
            }
        }
        console.log(basicState, selectedState);
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
