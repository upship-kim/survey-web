import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedFormAtom } from "../../atom/SurveyAtom";
import { FirstOptionTypes, OneQuestionTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultText from "../atoms/DefaultText";
import CheckedLabel from "./CheckedLabel";
import DetailOptionBox from "./DetailOptionBox";

interface LocalProps extends OneQuestionTypes {
    cardIndex: number;
}

const QuestionWrapper = ({ title, type, options, cardIndex }: LocalProps) => {
    const [form, setForm] = useRecoilState(selectedFormAtom);
    //체크되어있는 항목들의 하위 옵션 박스
    const [detailOption, setDetailOption] = useState<FirstOptionTypes[]>([]);
    const [checked, setChecked] = useState<string[]>([]);
    //체크된 세부 옵션 name값
    const [detailChecked, setDetailChecked] = useState<string[]>([]);
    const [currentTarget, setSetCurrentTarget] = useState<FirstOptionTypes>();

    // const detailOptionTarget = options?.find(item => item.name === checked[0]);
    console.log(form);
    console.log(detailChecked);

    //렌더링 즉시 기존 입력값 입력
    useEffect(() => {
        // alert("초기화");
        const globalValue = form[cardIndex].value;
        //기존 체크된 값 초기화
        setChecked(globalValue);
        if (type === 1) {
            //체크된 값에 세부 옵션이 있다면 세부 옵션을 초기화함
            let initDetailOption = options?.find(
                item => item.name === globalValue[0],
            );
            if (initDetailOption?.options !== undefined) {
                setDetailOption([initDetailOption]);
            } else {
                setDetailOption([]);
            }
        }

        return () => {
            setChecked([""]);
        };
    }, [form]);
    // }, [cardIndex, form, checked, currentTarget, type]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.id;
        setSetCurrentTarget(options?.find(item => item.name === target));
        // const isIncluded = checked.includes(target);
        let temp = form.slice();
        //라디오 타입일 경우
        if (type === 1) {
            if (checked[0] !== target) {
                setChecked(new Array(target));
                console.log("currentTarget", currentTarget);
                if (currentTarget?.options !== undefined) {
                    setDetailOption([currentTarget]);
                } else {
                    setDetailOption([]);
                }

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
        if (type === 2) {
            if (!checked.includes(target)) {
                console.log("date", currentTarget);
                setChecked([...checked, target]);
                if (currentTarget?.options !== undefined) {
                    setDetailOption([...detailOption, currentTarget]);
                }

                setForm(
                    temp.map(item =>
                        item.index === cardIndex
                            ? {
                                  ...item,
                                  value: [...item.value, target],
                                  detailValue: [""],
                              }
                            : item,
                    ),
                );
            } else {
                setChecked(checked.filter(item => item !== target));
                if (currentTarget?.options !== undefined) {
                    setDetailOption(
                        detailOption.filter(item => item.name !== target),
                    );
                }
                setForm(
                    temp.map(item =>
                        item.index === cardIndex
                            ? {
                                  ...item,
                                  value: item.value.filter(
                                      item => item !== target,
                                  ),
                                  detailValue: [""],
                              }
                            : item,
                    ),
                );
            }
        }
    };

    //세부 옵션 선택 시 체인저
    const onDetailChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        detailType: number,
    ) => {
        const target = e.target.id;
        if (detailType === 1) {
            if (detailChecked[0] !== target) {
                setDetailChecked(new Array(target));
                let temp = form.slice();
                setForm(
                    temp.map(item =>
                        item.index === cardIndex
                            ? {
                                  ...item,
                                  detailValue: [target],
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
                        key={item.name}
                        detailOptionList={item.options}
                        detailTitle={item.detailTitle}
                        type={item.type}
                        cardIndex={cardIndex}
                        onDetailChange={onDetailChange}
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
    row-gap: 1rem;
`;
