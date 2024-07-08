import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
        </Routes>
    );
}

export default App;
