import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResultsPage = () => {
    const { state } = useLocation();
    const { score, total_questions } = state;
    const navigate = useNavigate();
    console.log("location", state);
    return (
        <Container>
            <Wrapper className="wrapper">
                <Heading>Quiz Results</Heading>
                <p>Total Questions: {total_questions}</p>
                <p>Correct Answers: {score}</p>
                <Button onClick={() => navigate("/")}>Play Again</Button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;
const Wrapper = styled.section``;
const Heading = styled.h2`
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0;
    cursor: pointer;
    background-color: #00f;
    color: #fff;
`;

export default ResultsPage;
