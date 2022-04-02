import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedCardIndexAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import { rowDatas } from "../../FormData/dummyData";
import SurveyCard from "../organisms/SurveyCard";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
