import React, { useState } from "react";
import iconsA from "../../assets/images/icon-a.svg";
import iconsB from "../../assets/images/icon-b.svg";
import iconsC from "../../assets/images/icon-c.svg";
import iconsD from "../../assets/images/icon-d.svg";
import iconsError from "../../assets/images/icon-error.svg";
import "./style.css";
import { Header, If } from "../../components";

type Props = {
  nextStep(): void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  step: number;
  optionsProps: QuizType[];
  subjectSelected: string;
};

const Quiz: React.FC<Props> = ({
  optionsProps,
  step,
  setCount,
  count,
  nextStep,
  subjectSelected,
}) => {
  let questions: QuestionsType[] = [];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [answerValidation, setAnswerValidation] = useState(false);

  const handleSelect = (option: string) => {
    if (answerValidation) return;

    if (selectedOption === option) {
      setSelectedOption(null);
      setErrorSubmit(false);
    } else {
      setSelectedOption(option);
    }
  };

  if (subjectSelected === "HTML") {
    questions = optionsProps[0].questions;
  } else if (subjectSelected === "CSS") {
    questions = optionsProps[1].questions;
  } else if (subjectSelected === "JavaScript") {
    questions = optionsProps[2].questions;
  } else {
    questions = optionsProps[3].questions;
  }

  let rightAnswer = questions[step - 1].answer;

  const isRight = rightAnswer === selectedOption;

  const filler = document.getElementById("filler");

  if (filler) {
    let width = (step / 10) * 100 + "%";
    width = step === 1 ? "10%" : width;
    filler.style.width = width;
  }

  return (
    <>
      <Header subjectSelected={subjectSelected} />
      <div className="ellipseTop" />
      <div className="wrapperQuestions">
        <>
          <div>
            <div className="littleWord">
              <i>
                Question {step} of {questions.length}
              </i>
            </div>
            <div className="titleQuestionWord">
              {questions[step - 1].question}
            </div>
            <div className="progress-bar">
              <div className="filler" id="filler" />
            </div>
          </div>
          <div className="content-questions">
            {questions[step - 1].options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  handleSelect(option);
                }}
                className={`inputQuestion ${
                  selectedOption === option ? "selected" : ""
                } ${
                  isRight && selectedOption === option && answerValidation
                    ? "correct"
                    : ""
                }  ${
                  !isRight && selectedOption === option && answerValidation
                    ? "wrong"
                    : ""
                }
                
                `}
              >
                <img
                  src={
                    index === 0
                      ? iconsA
                      : index === 1
                      ? iconsB
                      : index === 2
                      ? iconsC
                      : iconsD
                  }
                  className="iconsQuestions"
                  alt="icons.svg"
                />
                {option}
              </div>
            ))}
            <If hasCondition={selectedOption !== null && !nextPage}>
              <div
                onClick={() => {
                  setNextPage(true), setAnswerValidation(true);
                }}
                className="questionsOptions"
              >
                <div className="submitButton">Submit Answer</div>
              </div>
            </If>
            <If hasCondition={selectedOption === null}>
              <div
                onClick={() => setErrorSubmit(true)}
                className="questionsOptions"
              >
                <div className="submitButton">Submit Answer</div>
              </div>
            </If>
            <If hasCondition={errorSubmit && selectedOption === null}>
              <div className="error">
                <img
                  src={iconsError}
                  className="iconsQuestions"
                  alt="icons.svg"
                />
                <div>Please select an answer</div>
              </div>
            </If>
            <If hasCondition={nextPage}>
              <div
                onClick={() => {
                  nextStep(),
                    setNextPage(false),
                    setErrorSubmit(false),
                    setSelectedOption(null),
                    setAnswerValidation(false),
                    setCount(count + (isRight ? 1 : 0));
                }}
                className="questionsOptions"
              >
                <div className="submitButton">Next Question</div>
              </div>
            </If>
          </div>
        </>
      </div>
      <div className="ellipseBottom" />
    </>
  );
};

export default Quiz;
