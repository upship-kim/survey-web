import React, { useCallback, useEffect, useState } from "react";
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
    const [detailOptionList, setDetailOptionList] = useState<
        FirstOptionTypes[]
    >([]);
    const [checked, setChecked] = useState<string[]>([]);
    const [detailChecked, setDetailChecked] = useState<string[]>([]);
    const [currentTarget, setSetCurrentTarget] = useState<FirstOptionTypes>();

    // const detailOptionTarget = options?.find(item => item.name === checked[0]);

    //렌더링 즉시 기존에 체크 되었던 값으로 초기화
    useEffect(() => {
        const globalValue = form[cardIndex].value;
        //기존 체크된 값 초기화
        if (globalValue.length !== 0) {
            setChecked(globalValue);
        }
        return () => {
            setChecked([""]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 체크되었던 값에 세부 옵션값이 있다면 리스트 초기화
    useEffect(() => {
        if (type === 1 || type === 0) {
            //체크된 값에 세부 옵션이 있다면 세부 옵션을 초기화함
            let initDetailOption = options?.find(
                item => item.name === form[cardIndex].value[0],
            );
            if (initDetailOption?.options !== undefined) {
                setDetailOptionList([initDetailOption]);
            } else {
                setDetailOptionList([]);
            }
        }
        if (type === 2) {
            let temp: FirstOptionTypes[] = [];
            options?.forEach(item => {
                if (form[cardIndex].value.includes(item.name)) {
                    temp.push(item);
                }
            });
            setDetailOptionList(temp);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    const typeChager = () => {
        if (type === 1) {
            if (currentTarget?.options !== undefined) {
                setDetailOptionList([currentTarget]);
            } else {
                setDetailOptionList([]);
            }
        }
        if (type === 2) {
            if (checked.includes(currentTarget?.name as string)) {
                if (currentTarget?.options !== undefined) {
                    setDetailOptionList([...detailOptionList, currentTarget]);
                }
            } else {
                setDetailOptionList(prev => {
                    return prev.filter(
                        item => item.name !== currentTarget?.name,
                    );
                });
            }
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let temp = form.slice();
        const target = e.target.id;
        let targetObj = options?.find(
            item => item.name === target,
        ) as FirstOptionTypes;

        setSetCurrentTarget(targetObj);

        //라디오 타입일 경우
        if (type === 1) {
            if (checked[0] !== target) {
                setChecked(new Array(target));
                typeChager();
                setForm(
                    temp.map(item =>
                        item.index === cardIndex
                            ? {
                                  ...item,
                                  value: [target],
                                  detailValue: {
                                      [targetObj.detailTitle]: [],
                                  },
                              }
                            : item,
                    ),
                );
            }
        }
        //체크박스일 경우
        if (type === 2) {
            let tempArray: string[] = [];
            if (!checked.includes(target)) {
                tempArray = checked[0] !== "" ? [...checked, target] : [target];
            } else {
                tempArray = checked.filter(item => item !== target);
            }

            setChecked(tempArray);
            typeChager();
            setForm(
                temp.map(item =>
                    item.index === cardIndex
                        ? {
                              ...item,
                              value: tempArray,
                              detailValue: {
                                  ...form[cardIndex].detailValue,
                                  [targetObj.detailTitle]: [],
                              },
                          }
                        : item,
                ),
            );
        }
    };

    const onDetailSelectChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        detailTitle: string,
    ) => {
        const detailTarget = e.target.value;
        let temp = form.slice();
        //세부 옵션이 셀렉트 타입일 경우
        setForm(
            temp.map(item =>
                item.index === cardIndex
                    ? {
                          ...item,
                          detailValue: {
                              ...item.detailValue,
                              [detailTitle]: [detailTarget],
                          },
                      }
                    : item,
            ),
        );
    };

    //세부 옵션 선택 시 체인저
    const onDetailChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        detailType: number,
        detailTitle: string,
    ) => {
        const detailTarget = e.target.id;

        let temp = form.slice();

        //세부 옵션이 라디오 타입일 경우
        if (detailType === 1) {
            setForm(
                temp.map(item =>
                    item.index === cardIndex
                        ? {
                              ...item,
                              detailValue: {
                                  ...item.detailValue,
                                  [detailTitle]: [detailTarget],
                              },
                          }
                        : item,
                ),
            );
        }
        if (detailType === 2) {
            let tempArray: string[] = [];

            let tempObj: {} = {};

            if (
                Object.keys(form[cardIndex].detailValue).length === 0 ||
                // form[cardIndex].detailValue[detailTitle].length === 0 ||
                !detailChecked.includes(detailTarget)
            ) {
                setDetailChecked([...detailChecked, detailTarget]);

                tempArray = [...detailChecked, detailTarget];
                tempObj = {
                    ...form[cardIndex].detailValue,
                    [detailTitle]: tempArray,
                };
            } else {
                let newArray = form[cardIndex].detailValue[detailTitle].filter(
                    item => item !== detailTarget,
                );

                setDetailChecked(newArray);

                tempObj = {
                    ...tempObj,
                    ...form[cardIndex].detailValue,
                    [detailTitle]: newArray,
                };
            }

            setForm(
                temp.map(item =>
                    item.index === cardIndex
                        ? {
                              ...item,
                              detailValue: tempObj,
                          }
                        : item,
                ),
            );
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
                        <div key={index}>
                            <CheckedLabel
                                name={item.name}
                                detailTitle={item.detailTitle}
                                checked={checked.includes(item.name)}
                                type={type}
                                options={item.options}
                                onChange={onChange}
                            />
                        </div>
                    ))
                )}

                {detailOptionList &&
                    detailOptionList.map((item, index) => (
                        <DetailOptionBox
                            key={index}
                            detailOptionList={item.options}
                            detailTitle={item.detailTitle}
                            type={item.type}
                            cardIndex={cardIndex}
                            onDetailChange={onDetailChange}
                            onDetailSelectChange={onDetailSelectChange}
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
    @media screen and (max-width: 768px) {
        flex-direction: column;
    } ;
`;
const TitleBlock = styled.div`
    display: flex;
    width: 20%;
    align-items: flex-start;
    padding: 1rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    } ;
`;

const BodyBlock = styled.div`
    display: flex;
    width: 80%;
    padding: 1rem 0;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    } ;
`;
