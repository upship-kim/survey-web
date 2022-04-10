import moment from "moment";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { basicFormAtom } from "../../atom/SurveyAtom";
import { requestForm } from "../../FormData/requestForm";
import DefaultInput from "../atoms/DefaultInput";
import DefaultSelect from "../atoms/DefaultSelect";
import InputRow from "../molecures/InputRow";

const BasicForm = () => {
    const [basicState, setBasicState] = useRecoilState(basicFormAtom);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBasicState(prev => {
            return {
                ...prev,
                [name]:
                    name === "date"
                        ? moment(value).format("yyyy-MM-DD")
                        : value,
            };
        });
    };
    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBasicState(prev => {
            return { ...prev, [name]: value };
        });
    };
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
                                onChange={onChange}
                                required
                                value={basicState[item.props.name]}
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
                            onChange={onSelectChange}
                            required
                            value={basicState[item.props.name]}
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
