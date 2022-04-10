import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { basicFormAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import { client } from "../../lib/client";
import Container from "../atoms/Container";
import BlockTitle from "../molecures/BlockTitle";
import Header from "../molecures/Header";
import BasicForm from "../templates/BasicForm";
import SelectForm from "../templates/SelectForm";
import SubmitForm from "../templates/SubmitForm";
import { init, send, sendForm } from "@emailjs/browser";

const SurveyPage = () => {
    // const form = useRef<any>(null);
    useEffect(() => {
        init("tkdqook@gmail.com");
    }, []);
    const basicState = useRecoilValue(basicFormAtom);
    const selectedState = useRecoilValue(selectedFormAtom);

    const onSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        // send(
        //     "service_5yfyk5o",
        //     "template_tb9jbuo",
        //     {
        //         state: `안녕
        //     또안녕`,
        //     },
        //     "EvNUW0-oFfbmC5rug",
        // ).then(
        //     result => {
        //         console.log(result.text);
        //     },
        //     error => {
        //         console.log(error.text);
        //     },
        // );

        try {
            await client.post("/api/survey", {
                basicInfo: basicState,
                selectedInfo: selectedState,
            });
            // sendForm(
            //     "service_5yfyk5o",
            //     "template_tb9jbuo",
            //     "upshi_TEST",
            //     "tkdqook@gmail.com",
            // );
        } catch (e) {
            console.log(e);
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
