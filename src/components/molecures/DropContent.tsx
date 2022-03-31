import React from 'react';
import styled from 'styled-components';
import { OneCardTypes } from '../../types/SelectTypes';
import RowSurvey from './RowSurvey';

const DropContent = ({ rowDatas }: OneCardTypes) => {
    console.log('content', rowDatas);
    return (
        <Wrapper>
            {rowDatas.map((item, index) => (
                <RowSurvey
                    key={index}
                    title={item.title}
                    type={item.type}
                    options={item.options}
                />
            ))}
        </Wrapper>
    );
};

export default DropContent;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
