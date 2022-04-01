import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedFormAtom } from "../../atom/SurveyAtom";
import { SecondsOptionTypes } from "../../types/SelectTypes";
import CheckedLabel from "./CheckedLabel";

interface DetailOptionBlockProps {
    detailOptionList?: SecondsOptionTypes[];
    type: number;
    cardIndex: number;
}

const DetailOptionBox = ({
    detailOptionList,
    type,
    cardIndex,
}: DetailOptionBlockProps) => {
    const [form, setForm] = useRecoilState(selectedFormAtom);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(e.target.id);
    };

    return (
        <DetailOptionBlock>
            {detailOptionList !== undefined &&
                detailOptionList.map(item => (
                    <div key={item.name}>
                        <CheckedLabel
                            name={item.name}
                            checked={
                                form[cardIndex].detailValue?.includes(
                                    item.name,
                                ) || false
                            }
                            type={type}
                            options={detailOptionList}
                            onChange={onChange}
                        />
                    </div>
                ))}
        </DetailOptionBlock>
    );
};

export default DetailOptionBox;

const DetailOptionBlock = styled.div`
    display: flex;
    width: 80%;
    padding: 1rem 0;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`;
