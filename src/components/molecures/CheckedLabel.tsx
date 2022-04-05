import React from "react";
import styled from "styled-components";
import { FirstOptionTypes } from "../../types/SelectTypes";
import DefaultInput from "../atoms/DefaultInput";
import DefaultLabel from "../atoms/DefaultLabel";

interface LocalProps extends FirstOptionTypes {
    type: number;
    name: string;
    id: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    img?: string | undefined;
}

const CheckedLabel = ({
    name,
    type,
    onChange,
    checked,
    img,
    id,
    detailTitle,
}: LocalProps) => {
    const CheckComponent = () => {
        switch (type) {
            case 0:
                return (
                    <DefaultInput
                        type={"text"}
                        id={name}
                        onChange={onChange}
                        style={{ width: "maxContent" }}
                    />
                );
            case 1:
                return (
                    <DefaultInput
                        type={"radio"}
                        id={name}
                        style={{ width: "1rem" }}
                        checked={checked}
                        onChange={onChange}
                    />
                );
            case 2:
                return (
                    <DefaultInput
                        type={"checkbox"}
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
        <Wrapper htmlFor={name}>
            <ItemBox>
                {CheckComponent()}
                <DefaultLabel text={name} htmlFor={name} />
            </ItemBox>
            {img !== "" && img && (
                <Img src={img} alt="img" loading="lazy" decoding="async" />
            )}
        </Wrapper>
    );
};

export default CheckedLabel;

const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: max-content;
    padding: 6px;
    border: 2px solid #eeeeee;
    border-radius: 70px;
    cursor: pointer;

    & {
        margin-right: 12px;
    }
`;
const ItemBox = styled.div`
    display: flex;
    flex-direction: row;
    height: max-content;
    width: 100%;
    cursor: pointer;
    & {
        margin-right: 12px;
    }
`;

const Img = styled.img`
    margin: 10px;
    height: 6rem;
    border: 0px;
    border-radius: 20px;
`;
