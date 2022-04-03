import React from "react";
import { RecoilRoot } from "recoil";

import "./App.css";
import AdminPage from "./components/pages/AdminPage";
import SurveyPage from "./components/pages/SurveyPage";

function App() {
    return (
        <RecoilRoot>
            {/* <SurveyPage /> */}
            <AdminPage />
        </RecoilRoot>
    );
}

export default App;
