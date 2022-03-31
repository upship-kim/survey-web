import React, { useState } from 'react';
import styled from 'styled-components';
import { OneCardTypes, OneQuestionTypes } from '../../types/SelectTypes';
import SurveyCard from './SurveyCard';

const rowDatas = {
    data: [
        {
            title: '주방 공사 선택',
            type: 1,
            options: [
                {
                    name: '냉장고',
                    innerArrayContents: {
                        type: 1,
                        options: [
                            {
                                name: '한쪽냉장고',
                                img: '',
                            },
                            {
                                name: '양문형냉장고',
                                img: '',
                            },
                            {
                                name: '아이스박스',
                                img: '',
                            },
                        ],
                    },
                },
                {
                    name: '식탁',
                    innerArrayContents: {
                        type: 1,
                        options: [
                            {
                                name: '아일랜드형',
                                img: '',
                            },
                            {
                                name: '한국형',
                                img: '',
                            },
                            {
                                name: '석기시대형',
                                img: '',
                            },
                        ],
                    },
                },
                {
                    name: '가스레인지',
                },
            ],
        },
        {
            title: '기타 공사',
            type: 0,
        },
    ],
};

const temp = [
    { title: '비교견적' },
    { title: '내주세요' },
    { title: '시름말고' },
    { title: '근데왜싫어' },
    { title: '이상하네' },
    { title: '발에땀나' },
    { title: '아휴증말' },
];

const SelectForm = () => {
    const [active, setActive] = useState<number | null>(null);

    const onClick = (index: number) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };
    return (
        <Wrapper>
            {temp.map((item, index) => (
                <SurveyCard
                    key={index}
                    index={index}
                    title={item.title}
                    rowDatas={rowDatas}
                    isActive={index === active}
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
