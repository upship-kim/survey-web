import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedCardIndexAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import { client } from "../../lib/client";
import { CardTypes } from "../../types/SelectTypes";
import SurveyCard from "../organisms/SurveyCard";

const SelectForm = () => {
    const [fetchData, setFetchData] = useState<CardTypes[]>([]);
    const [cardNum, setCardNum] = useRecoilState(selectedCardIndexAtom);

    const setForm = useSetRecoilState(selectedFormAtom);

    useEffect(() => {
        fetchList();
        return () => {};
    }, []);

    useEffect(() => {
        if (fetchData.length > 0) {
            setForm(
                fetchData.map((item, index) => {
                    return {
                        index: index,
                        etc: "",
                        title: item.title,
                        value: [""],
                        detailValue: {},
                    };
                }),
            );
        }

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData]);
    const fetchList = async () => {
        const response = await client.get("api/admin");
        setFetchData(response.data.data);
    };
    const onClick = (index: number) => {
        if (cardNum === index) {
            setCardNum(null);
        } else {
            setCardNum(index);
        }
    };
    return (
        <Wrapper>
            {fetchData.length > 0 &&
                fetchData.map((item, index) => (
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
    @media screen and (max-width: 768px) {
        padding: 0;
        width: 100%;
    } ;
`;
