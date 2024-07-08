import React, { useContext, useState } from "react";
import data from "../jsonData/data.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/AppProvider";

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const navigate = useNavigate();

    const question = data[currentQuestionIndex];
    const { options, answer } = question;

    const { something } = useContext(StateContext);
    console.log("something", something);
    // handling option click function
    const handleOptionClick = (option) => {
        if (!isSubmitted) {
            setSelectedOption(option);
        }
    };

    //handling answer submit
    const handleSubmit = () => {
        if (selectedOption) {
            setIsSubmitted(true);
            setUserAnswers([...userAnswers, selectedOption]);
            if (selectedOption === answer) {
                //add mark
                setScore(score + 1);
            }
        }
    };

    //handling next question function
    const handleNext = () => {
        if (currentQuestionIndex < data?.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            navigate("/results", {
                state: {
                    score,
                    total_questions: data?.length,
                },
            });
        }

        setSelectedOption("");
        setIsSubmitted(false);
    };
    return (
        <Container>
            <Question>{question?.question}</Question>
            {/* Options */}
            <OptionsConatiner>
                {options?.map((option, index) => (
                    <Option
                        key={`KOI78${index}`}
                        onClick={() => handleOptionClick(option)}
                        iscorrect={isSubmitted && option === answer}
                        isincorrect={
                            isSubmitted &&
                            option === selectedOption &&
                            option !== answer
                        }
                    >
                        {option}
                    </Option>
                ))}
            </OptionsConatiner>
            {!isSubmitted ? (
                <Button onClick={() => handleSubmit()}>Submit</Button>
            ) : (
                <Button onClick={() => handleNext()}>
                    {currentQuestionIndex < data?.length - 1
                        ? "Next"
                        : "See Results"}
                </Button>
            )}
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
const Question = styled.h2`
    margin: 20px 0;
`;
const OptionsConatiner = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;
const Option = styled.button`
    border: none;
    padding: 10px;
    border-radius: 8px;
    margin: 5px 0;
    cursor: pointer;
    width: 100%;
    background-color: ${(props) =>
        props.iscorrect ? "green" : props?.isincorrect ? "red" : "#eee"};
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 8px;
    margin: 5px 0;
    cursor: pointer;
    background-color: #00f;
    color: #fff;
`;

export default QuizPage;
