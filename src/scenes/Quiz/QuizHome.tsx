import React from "react";
import "./style.css";
import iconsHtml from "../../assets/images/icon-html.svg";
import iconsCss from "../../assets/images/icon-css.svg";
import iconsJs from "../../assets/images/icon-js.svg";
import iconsAccessibility from "../../assets/images/icon-accessibility.svg";

type Props = {
  nextStep(): void;
  step: number;
  optionsProps: QuizType[];
  setSubjectSelected: React.Dispatch<React.SetStateAction<string>>;
};

const QuizHome: React.FC<Props> = ({
  optionsProps,
  nextStep,
  setSubjectSelected,
}) => {
  return (
    <>
      <div className="ellipseTop" />
      <div className="wrapper">
        <div>
          <div className="firstWord">Welcome to the</div>
          <div className="secondWord">Frontend Quiz!</div>
          <div className="littleWord">Pick a subject to get started.</div>
        </div>
        <div className="subjectSelection">
          {optionsProps.map((row) => {
            if (row.title === "HTML") {
              return (
                <div
                  onClick={() => {
                    nextStep(), setSubjectSelected(row.title);
                  }}
                  className="inputTitle"
                >
                  <img
                    src={iconsHtml}
                    className="iconsHome"
                    alt="iconsHtml.svg"
                  />
                  {row.title}
                </div>
              );
            } else if (row.title == "CSS") {
              return (
                <div
                  onClick={() => {
                    nextStep(), setSubjectSelected(row.title);
                  }}
                  className="inputTitle"
                >
                  <img
                    src={iconsCss}
                    className="iconsHome"
                    alt="iconsCss.svg"
                  />

                  {row.title}
                </div>
              );
            } else if (row.title == "JavaScript") {
              return (
                <div
                  onClick={() => {
                    nextStep(), setSubjectSelected(row.title);
                  }}
                  className="inputTitle"
                >
                  <img src={iconsJs} className="iconsHome" alt="iconsJs.svg" />
                  {row.title}
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => {
                    nextStep(), setSubjectSelected(row.title);
                  }}
                  className="inputTitle"
                >
                  <img
                    src={iconsAccessibility}
                    className="iconsHome"
                    alt="iconsAccessibility.svg"
                  />

                  {row.title}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="ellipseBottom" />
    </>
  );
};

export default QuizHome;
