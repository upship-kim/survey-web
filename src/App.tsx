import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import "./App.css";
import { isLoginAtom } from "./atom/SurveyAtom";
import AdminLoginPage from "./components/pages/AdminLoginPage";
import AdminPage from "./components/pages/AdminPage";
import SurveyPage from "./components/pages/SurveyPage";
import { client } from "./lib/client";

function App() {
    const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginAtom);
    useEffect(() => {
        fetchLoginCheck();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchLoginCheck = async () => {
        try {
            const response = await client.get("api/auth/check");

            if (response.data.id) {
                setIsLogin(true);
            }
        } catch (e) {
            setIsLogin(false);
        }
    };
    return (
        <Routes>
            <Route path="/" element={<SurveyPage />} />
            <Route
                path="/admin"
                element={isLogin ? <AdminPage /> : <AdminLoginPage />}
            />
        </Routes>
    );
}

export default App;
