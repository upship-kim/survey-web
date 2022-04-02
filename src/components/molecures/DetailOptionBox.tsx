import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedFormAtom } from "../../atom/SurveyAtom";
import { SecondsOptionTypes } from "../../types/SelectTypes";
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
}

const DetailOptionBox = ({
    detailOptionList,
    type,
    cardIndex,
    onDetailChange,
    detailTitle,
}: DetailOptionBlockProps) => {
    const form = useRecoilValue(selectedFormAtom);

    const checkedList = form[cardIndex]?.detailValue[detailTitle];
    return (
        form && (
            <DetailOptionBlock>
                <DefaultText text={detailTitle || ""} bold />
                <OptionBox>
                    {detailOptionList !== undefined &&
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
                        ))}
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
`;

const OptionBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    margin: 1rem 0;
`;
