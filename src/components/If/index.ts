import { FC } from "react";

type Props = {
  hasCondition: boolean;
  children: JSX.Element;
};

const If: FC<Props> = ({ hasCondition, children }): JSX.Element | null =>
  hasCondition ? children : null;

export default If;
