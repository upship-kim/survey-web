import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedCardIndexAtom, selectedFormAtom } from "../../atom/SurveyAtom";
import {
    FirstOptionTypes,
    OneQuestionTypes,
    SecondsOptionTypes,
} from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultText from "../atoms/DefaultText";
import CheckedLabel from "./CheckedLabel";
import DetailOptionBox from "./DetailOptionBox";

interface LocalProps extends OneQuestionTypes {
    cardIndex: number;
}

const QuestionWrapper = ({ title, type, options, cardIndex }: LocalProps) => {
    const [form, setForm] = useRecoilState(selectedFormAtom);
    const [detailOption, setDetailOption] = useState<FirstOptionTypes[]>([]);

    console.log(form, cardIndex);
    const [checked, setChecked] = useState<string[]>([]);
    const detailOptionTarget = options?.find(item => item.name === checked[0]);
    useEffect(() => {
        setChecked(form[cardIndex].value);
        if (type === 1) {
            if (detailOptionTarget?.options !== undefined) {
                setDetailOption([detailOptionTarget]);
            } else {
                setDetailOption([]);
            }
        }

        return () => {
            setChecked([""]);
        };
    }, [cardIndex, form, checked, detailOptionTarget, type]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.id;
        const isIncluded = checked.includes(target);

        console.log("!!!!!!!!!!!!!!", isIncluded);
        //라디오 타입일 경우
        if (type === 1) {
            if (checked[0] !== target) {
                setChecked(new Array(target));
                if (detailOptionTarget?.options !== undefined) {
                    setDetailOption([detailOptionTarget]);
                } else {
                    setDetailOption([]);
                }
                let temp = form.slice();
                setForm(
                    temp.map(item =>
                        item.index === cardIndex
                            ? {
                                  ...item,
                                  value: [target],
                                  detailValue: [""],
                              }
                            : item,
                    ),
                );
            }
        }
    };

    return (
        <Wrapper>
            <TitleBlock>
                <DefaultText text={title} bold />
            </TitleBlock>
            <BodyBlock>
                {options === undefined ? (
                    <DefaultInput />
                ) : (
                    options.map((item, index) => (
                        <div key={item.name}>
                            <CheckedLabel
                                name={item.name}
                                checked={checked.includes(item.name)}
                                type={type}
                                options={item.options}
                                onChange={onChange}
                            />
                        </div>
                    ))
                )}

                {detailOption.map(item => (
                    <DetailOptionBox
                        detailOptionList={item.options}
                        type={item.type}
                        cardIndex={cardIndex}
                    />
                ))}
            </BodyBlock>
        </Wrapper>
    );
};

export default QuestionWrapper;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
`;
const TitleBlock = styled.div`
    display: flex;
    width: 20%;
    align-items: flex-start;
    padding: 1rem;
`;

const BodyBlock = styled.div`
    display: flex;
    width: 80%;
    padding: 1rem 0;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`;
