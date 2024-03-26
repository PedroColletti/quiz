import React from "react";
import "./style.css";
import { If } from "../../components";
import QuizHome from "./QuizHome";
import QuizQuestions from "./QuizQuestions";
import QuizEnd from "./QuizEnd";

type Props = {
  nextStep(): void;
  finishQuiz(): void;
  setSubjectSelected: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  step: number;
  optionsProps: QuizType[];
  subjectSelected: string;
};

const Quiz: React.FC<Props> = ({
  optionsProps,
  nextStep,
  finishQuiz,
  setCount,
  count,
  step,
  setSubjectSelected,
  subjectSelected,
}) => {
  return (
    <>
      <If hasCondition={step === 0}>
        <QuizHome
          optionsProps={optionsProps}
          nextStep={nextStep}
          step={step}
          setSubjectSelected={setSubjectSelected}
        />
      </If>
      <If hasCondition={step > 0 && step <= 10}>
        <QuizQuestions
          optionsProps={optionsProps}
          setCount={setCount}
          count={count}
          nextStep={nextStep}
          step={step}
          subjectSelected={subjectSelected}
        />
      </If>
      <If hasCondition={step === 11}>
        <QuizEnd
          finishQuiz={finishQuiz}
          subjectSelected={subjectSelected}
          count={count}
          setCount={setCount}
        />
      </If>
    </>
  );
};

export default Quiz;
