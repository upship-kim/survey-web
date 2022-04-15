import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import "./App.css";
import { isLoginAtom } from "./atom/SurveyAtom";
import AdminLoginPage from "./components/pages/AdminLoginPage";
import AdminPage from "./components/pages/AdminPage";
import SurveyPage from "./components/pages/SurveyPage";
import { client } from "./lib/client";

function App() {
    const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginAtom);
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    useEffect(() => {
        if (pathname === "/admin") {
            fetchLoginCheck();
        }
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
            navigate("/login");
        }
    };
    return (
        <Routes>
            <Route path="/" element={<SurveyPage />} />
            {isLogin ? (
                <Route path="/admin" element={<AdminPage />} />
            ) : (
                <Route path="/login" element={<AdminLoginPage />} />
            )}
        </Routes>
    );
}

export default App;
