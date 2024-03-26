import React from "react";
import "./style.css";
import { If } from "../../components";
import iconsHtml from "../../assets/images/icon-html.svg";
import iconsCss from "../../assets/images/icon-css.svg";
import iconsJs from "../../assets/images/icon-js.svg";
import iconsAccessibility from "../../assets/images/icon-accessibility.svg";

type Props = {
  subjectSelected: string;
  style?: React.CSSProperties;
};

const Header: React.FC<Props> = ({ subjectSelected, style }) => {
  return (
    <div style={style} className="wrapper-header">
      <If hasCondition={subjectSelected === "HTML"}>
        <>
          <img src={iconsHtml} className="iconsHome" alt="iconsHtml.svg" />
          <div className="title">HTML</div>
        </>
      </If>
      <If hasCondition={subjectSelected === "CSS"}>
        <>
          <img src={iconsCss} className="iconsHome" alt="iconsCss.svg" />
          <div className="title">CSS</div>
        </>
      </If>
      <If hasCondition={subjectSelected === "JavaScript"}>
        <>
          <img src={iconsJs} className="iconsHome" alt="iconsJs.svg" />
          <div className="title">JavaScript</div>
        </>
      </If>
      <If hasCondition={subjectSelected === "Accessibility"}>
        <>
          <img
            src={iconsAccessibility}
            className="iconsHome"
            alt="iconsAccessibility.svg"
          />
          <div className="title">Accessibility</div>
        </>
      </If>
    </div>
  );
};

export default Header;
