import React, { useState } from 'react';
import styled from 'styled-components';
import { OneQuestionTypes } from '../../types/SelectTypes';
import DefaultInput from '../atoms/DefaultInput';
import DefaultText from '../atoms/DefaultText';
import CheckedLabel from './CheckedLabel';

const RowSurvey = ({ title, type, options }: OneQuestionTypes) => {
    const [checked, setChecked] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.id);
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
                    options.map(item => (
                        <div key={item.name}>
                            <CheckedLabel
                                name={item.name}
                                checked={checked === item.name}
                                type={type}
                                innerArrayContents={item.innerArrayContents}
                                onChange={onChange}
                            />
                        </div>
                    ))
                )}
            </BodyBlock>
        </Wrapper>
    );
};

export default RowSurvey;

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
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
