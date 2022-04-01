import React, { useState } from "react";
import styled from "styled-components";
import { SecondsOptionTypes } from "../../types/SelectTypes";
import CheckedLabel from "./CheckedLabel";

interface DetailOptionBlockProps {
    DetailOptionList?: SecondsOptionTypes[];
    type: number;
}

const DetailOptionBox = ({
    DetailOptionList,
    type,
}: DetailOptionBlockProps) => {
    const [DetailChecked, setDetailChecked] = useState();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(e.target.id);
    };

    return (
        <DetailOptionBlock>
            {DetailOptionList !== undefined &&
                DetailOptionList.map(item => (
                    <div key={item.name}>
                        {/* <CheckedLabel
                            name={item.name}
                            checked={checked === item.name}
                            type={type}
                            options={item.options}
                            onChange={onChange}
                        /> */}
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
