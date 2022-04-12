import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoginAtom } from "../../atom/SurveyAtom";
import { client } from "../../lib/client";
import DefaultInput from "../atoms/DefaultInput";
import DefaultText from "../atoms/DefaultText";
import InputRow from "../molecures/InputRow";
type loginTypes = {
    id: string;
    password: string;
};
const AdminLoginPage = () => {
    const [state, setState] = useState<loginTypes>({ id: "", password: "" });
    const setIsLogin = useSetRecoilState<boolean>(isLoginAtom);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await client.post("api/auth/login", state);
            if (response.data.id) {
                setIsLogin(true);
            }
        } catch (e: any) {
            if (e.response.status === 401) {
                alert("아이디 또는 비밀번호를 확인해주세요");
            }
        }
    };

    return (
        <Container>
            <Wrapper>
                <DefaultText text="관리자 로그인" bold size="large" />
                <StyledForm onSubmit={onSubmit}>
                    <InputRow title="아이디">
                        <DefaultInput
                            type={"text"}
                            name="id"
                            onChange={onChange}
                            value={state.id}
                        />
                    </InputRow>
                    <InputRow title="비밀번호">
                        <DefaultInput
                            type={"password"}
                            name="password"
                            onChange={onChange}
                            value={state.password}
                        />
                    </InputRow>
                    <StyledButton>로그인</StyledButton>
                </StyledForm>
            </Wrapper>
        </Container>
    );
};

export default AdminLoginPage;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: gray;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 4rem 2rem;
    align-items: center;
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-evenly;
    width: 100%;
`;
const StyledButton = styled.button`
    display: flex;
    outline: none;
    border: 0px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    letter-spacing: 8px;
    background-color: #5dc2b8;
    padding: 0.8rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
`;
