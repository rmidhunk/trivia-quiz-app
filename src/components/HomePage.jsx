import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { StateContext } from "../context/AppProvider";

const HomePage = () => {
    const navigate = useNavigate();
    // const { questions } = useContext(StateContext);
    // console.log("questions", questions);
    return (
        <Container>
            <Wrapper className="wrapper">
                <h1>Welcome to Trivia Quiz</h1>
                <Button onClick={() => navigate("/quiz")}>Start Quiz</Button>
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
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #00f;
    color: #fff;
    cursor: pointer;
    &:hover {
        background: #00a;
    }
`;

export default HomePage;
