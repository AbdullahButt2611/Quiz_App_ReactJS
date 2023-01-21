import { useState } from "react";

import QuestionList from "../data/questions.json";
import Question from "./Question.js"
import QuizResult from "./QuizResult.js"

function QuizScreen(){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    return (
        <div className="quiz-screen">
            isQuestionEnd ? (
                <QuizResult />
            ) : (
                <Question 
                    question = {QuestionList[currentQuestionIndex]}
                    totalQuestions = {QuestionList.length}
                    currentQuestion = {currentQuestionIndex+1}
                    setAnswer = { (index) => {
                        setMarkedAnswers((arr) => {
                            let newArr = [...arr];
                            newArr[currentQuestionIndex] = index;
                            return newArr;
                        });

                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } }
                />
            )
        </div>
    );
}

export default QuizScreen;