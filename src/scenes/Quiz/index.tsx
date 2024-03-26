import React, { useState } from "react";
import Quiz from "./Quiz";
import { AllQuestions } from "../../api";

const QuizIndex: React.FC = () => {
  const [step, setStep] = useState(0);
  const [subjectSelected, setSubjectSelected] = useState("");
  const [count, setCount] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const finishQuiz = () => {
    setStep(0);
  };

  const optionsProps: QuizType[] = AllQuestions.quizzes.map((row) => row);

  return (
    <Quiz
      nextStep={nextStep}
      finishQuiz={finishQuiz}
      setSubjectSelected={setSubjectSelected}
      setCount={setCount}
      count={count}
      subjectSelected={subjectSelected}
      step={step}
      optionsProps={optionsProps}
    />
  );
};

export default QuizIndex;
