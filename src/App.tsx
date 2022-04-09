import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import AdminPage from "./components/pages/AdminPage";
import SurveyPage from "./components/pages/SurveyPage";

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<SurveyPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </RecoilRoot>
    );
}

export default App;
