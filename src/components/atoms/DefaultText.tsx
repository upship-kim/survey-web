import React from 'react';
import styled from 'styled-components';
type sizeType = 'large' | 'medium' | 'small';
interface TextProps {
    text: string;
    size?: sizeType;
    bold?: boolean;
    isRequire?: boolean;
}
const DefaultText = ({ text, size = 'medium', bold, isRequire }: TextProps) => {
    const RequireStar = () => <Star>*</Star>;
    return (
        <Wrapper>
            <StyledSpan size={size} bold={bold}>
                {text}
            </StyledSpan>
            {isRequire && <RequireStar />}
        </Wrapper>
    );
};

export default DefaultText;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: max-content;
`;
const StyledSpan = styled.span<{ size: sizeType; bold?: boolean }>`
    font-size: ${props =>
        props.size === 'large'
            ? '1.2rem'
            : props.size === 'small'
            ? '0.8rem'
            : '1rem'};
    color: #7a7a7a;

    font-weight: ${({ bold }) => (bold ? 800 : 600)};
`;
const Star = styled.span`
    font-size: 0.9rem;
    font-weight: 800;
    color: #f04b4b;
    margin-left: 8px;
`;
