import React from "react";
import { RecoilRoot } from "recoil";

import "./App.css";
import SurveyPage from "./components/pages/SurveyPage";

function App() {
    return (
        <RecoilRoot>
            <SurveyPage />
        </RecoilRoot>
    );
}

export default App;
