import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedCardIndexAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import { rowDatas } from "../../FormData/surveyForm";
import { OneCardTypes } from "../../types/SelectTypes";
import SurveyCard from "../organisms/SurveyCard";

// const rowDatas: OneCardTypes = [
//     {
//         title: "주방 선택사항",
//         type: 1,
//         options: [
//             {
//                 name: "냉장고(라디오)",
//                 type: 1,
//                 options: [
//                     {
//                         name: "양문형 냉장고",
//                         img: "",
//                     },
//                     {
//                         name: "단문형 냉장고",
//                         img: "",
//                     },
//                     {
//                         name: "아이스박스",
//                         img: "",
//                     },
//                 ],
//             },
//             {
//                 name: "식탁(체크박스)",
//                 type: 3,
//                 options: [
//                     {
//                         name: "아일랜드형",
//                         img: "",
//                     },
//                     {
//                         name: "한국형",
//                         img: "",
//                     },
//                     {
//                         name: "밥상",
//                         img: "",
//                     },
//                 ],
//             },
//             {
//                 name: "입력형",
//                 type: 0,
//             },
//         ],
//     },
//     {
//         title: "기타사항",
//         type: 0,
//     },
// ];
const temp = [
    { title: "비교견적" },
    { title: "내주세요" },
    { title: "시름말고" },
    { title: "근데왜싫어" },
    { title: "이상하네" },
    { title: "발에땀나" },
    { title: "아휴증말" },
];

const SelectForm = () => {
    const [cardNum, setCardNum] = useRecoilState(selectedCardIndexAtom);
    const setForm = useSetRecoilState(selectedFormAtom);
    useEffect(() => {
        setForm(
            rowDatas.map((item, index) => {
                return {
                    index: index,
                    etc: "",
                    title: item.title,
                    value: [""],
                    detailValue: [""],
                };
            }),
        );

        return () => {};
    }, [rowDatas]);

    const onClick = (index: number) => {
        if (cardNum === index) {
            setCardNum(null);
        } else {
            setCardNum(index);
        }
    };
    return (
        <Wrapper>
            {rowDatas.map((item, index) => (
                <SurveyCard
                    key={index}
                    index={index}
                    title={item.title}
                    data={item.rows}
                    isActive={index === cardNum}
                    onClick={() => onClick(index)}
                />
            ))}
        </Wrapper>
    );
};

export default SelectForm;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 96%;
    height: 100%;
    padding: 1rem;
`;
