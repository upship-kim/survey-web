import React, { useState } from 'react';
import styled from 'styled-components';
import CardDrop from '../molecures/CardDrop';

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
    const ACTIVE_NUM = 2;
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
                <div>
                    <CardDrop
                        index={index}
                        title={item.title}
                        isActive={index === active}
                        onClick={() => onClick(index)}
                    />
                </div>
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
