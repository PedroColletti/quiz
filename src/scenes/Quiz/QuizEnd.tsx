import React from "react";
import "./style.css";
import { Header } from "../../components";

type Props = {
  finishQuiz(): void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  subjectSelected: string;
};

const QuizEnd: React.FC<Props> = ({
  finishQuiz,
  subjectSelected,
  setCount,
  count,
}) => {
  return (
    <>
      <Header subjectSelected={subjectSelected} />
      <div className="ellipseTop" />
      <div className="wrapper-end">
        <div>
          <div className="firstWord">Quiz completed</div>
          <div className="secondWord">You scored...</div>
        </div>
        <div className="content-wrapper">
          <div className="score-wrapper">
            <Header
              style={{ padding: "0px" }}
              subjectSelected={subjectSelected}
            />
            <div className="score">{count}</div>
            <div className="total">out of 10</div>
          </div>
          <div
            onClick={() => {
              finishQuiz(), setCount(0);
            }}
            className="play-again"
          >
            Play Again
          </div>
        </div>
      </div>
      <div className="ellipseBottom" />
    </>
  );
};

export default QuizEnd;
