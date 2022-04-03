import React, { SelectHTMLAttributes } from "react";
import styled from "styled-components";

type OptionTypes = {
    name: string | number;
};
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options?: OptionTypes[];
}

const DefaultSelect = ({ options, ...props }: SelectProps) => {
    return (
        <StyledSelect {...props}>
            <DefaultOption value="선택">선택</DefaultOption>
            {options &&
                options.map((item, index) => (
                    <option key={index} value={item.name}>
                        {item.name}
                    </option>
                ))}
        </StyledSelect>
    );
};

export default DefaultSelect;

const StyledSelect = styled.select<SelectHTMLAttributes<HTMLSelectElement>>`
    width: 100%;
    padding: 12px 6px;
    border: 0px solid gray;
    border-bottom: 1px solid #acacac;
    outline: none;

    &:focus {
        border-bottom: 2px solid #3f59cf;
        outline: none;
    }
`;

const DefaultOption = styled.option``;
