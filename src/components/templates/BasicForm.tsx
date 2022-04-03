import React from "react";
import styled from "styled-components";
import { requestForm } from "../../FormData/requestForm";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import InputRow from "../molecures/InputRow";

const BasicForm = () => {
    return (
        <Wrapper>
            {requestForm.map(item =>
                item.type === "input" ? (
                    <InputRow
                        key={item.id}
                        title={item.title}
                        isRequire={item.isRequire}
                    >
                        {item.type === "input" && (
                            <DefaultInput
                                {...item.props}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => console.log(e.target.value)}
                            />
                        )}
                    </InputRow>
                ) : (
                    <InputRow
                        key={item.id}
                        title={item.title}
                        isRequire={item.isRequire}
                    >
                        <DefaultSelect
                            {...item.props}
                            onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>,
                            ) => console.log(e.target.value)}
                        />
                    </InputRow>
                ),
            )}
        </Wrapper>
    );
};

export default BasicForm;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 96%;
    height: 100%;
    padding: 1rem;
`;
