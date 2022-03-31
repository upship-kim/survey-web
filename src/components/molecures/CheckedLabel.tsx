import React from 'react';
import styled from 'styled-components';
import { FirstOptionTypes } from '../../types/SelectTypes';
import DefaultInput from '../atoms/DefaultInput';
import DefaultLabel from '../atoms/DefaultLabel';

interface LocalProps extends FirstOptionTypes {
    type: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

const CheckedLabel = ({
    name,
    type,
    onChange,
    checked,
    innerArrayContents,
}: LocalProps) => {
    console.log(innerArrayContents);
    const CheckComponent = () => {
        switch (type) {
            case 0:
                return (
                    <DefaultInput
                        type={'text'}
                        id={name}
                        style={{ width: 'maxContent' }}
                    />
                );
            case 1:
                return (
                    <DefaultInput
                        type={'radio'}
                        id={name}
                        style={{ width: '1rem' }}
                        checked={checked}
                        onChange={onChange}
                    />
                );
            case 2:
                return (
                    <DefaultInput
                        type={'checkbox'}
                        id={name}
                        checked={checked}
                        onChange={onChange}
                    />
                );
            default:
                return;
        }
    };

    return (
        <>
            <Wrapper>
                {CheckComponent()}
                <DefaultLabel text={name} htmlFor={name} />
            </Wrapper>
            {checked && <div>{innerArrayContents?.toString()}</div>}
        </>
    );
};

export default CheckedLabel;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: max-content;
    width: max-content;
    & {
        margin-right: 12px;
    }
`;
