import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedFormAtom } from "../../atom/SurveyAtom";
import { SecondsOptionTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import DefaultText from "../atoms/DefaultText";
import CheckedLabel from "./CheckedLabel";

interface DetailOptionBlockProps {
    detailOptionList?: SecondsOptionTypes[];
    type: number;
    cardIndex: number;
    detailTitle: string;
    onDetailChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        detailType: number,
        detailTitle: string,
    ) => void;
    onDetailSelectChange: (
        e: React.ChangeEvent<HTMLSelectElement>,
        detailTitle: string,
    ) => void;
}

const DetailOptionBox = ({
    detailOptionList,
    type,
    cardIndex,
    onDetailChange,
    onDetailSelectChange,
    detailTitle,
}: DetailOptionBlockProps) => {
    const form = useRecoilValue(selectedFormAtom);

    const checkedList = form[cardIndex]?.detailValue[detailTitle];
    console.log(checkedList[0]);
    return (
        form && (
            <DetailOptionBlock>
                <DefaultText text={detailTitle || ""} bold />
                <OptionBox>
                    {type === 0 ? (
                        <DefaultInput type={"text"} />
                    ) : type === 3 ? (
                        detailOptionList !== undefined && (
                            <DefaultSelect
                                options={detailOptionList}
                                value={
                                    checkedList[0] === undefined
                                        ? "선택"
                                        : checkedList[0]
                                }
                                onChange={e =>
                                    onDetailSelectChange(e, detailTitle)
                                }
                            />
                        )
                    ) : (
                        detailOptionList !== undefined &&
                        detailOptionList.map(item => (
                            <CheckedLabel
                                key={item.name}
                                name={item.name}
                                detailTitle={detailTitle}
                                img={item.img}
                                checked={
                                    checkedList?.includes(item.name) || false
                                }
                                type={type}
                                onChange={e =>
                                    onDetailChange(e, type, detailTitle)
                                }
                            />
                        ))
                    )}
                </OptionBox>
            </DetailOptionBlock>
        )
    );
};

export default DetailOptionBox;

const DetailOptionBlock = styled.div`
    display: flex;

    width: 96%;
    padding: 1rem 0;
    align-items: flex-start;
    flex-direction: row;
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 1rem;
    flex-wrap: wrap;
    span {
        padding-left: 1rem;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
    } ;
`;

const OptionBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0;
    @media screen and (max-width: 768px) {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
    } ;
`;
