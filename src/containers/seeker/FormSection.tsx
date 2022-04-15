import React, { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

import "@/containers/seeker/FormSection.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

type FormSectionProps = LayoutProps;

const FormSection = ({ children }: FormSectionProps) => <div className="formSection">{children}</div>;

type TitleProps = LayoutProps;

const Title = ({ children }: TitleProps) => <div className="title">{children}</div>;

type RowProps = LayoutProps;

const Row = ({ children }: RowProps) => <div className="row">{children}</div>;

interface CellProps extends LayoutProps {
  fill?: boolean;
}

const Cell = ({ fill = false, children }: CellProps) => <div className={classNames("cell", { fill })}>{children}</div>;

type InputProps = ComponentProps<"input">;

const Input = (props: InputProps) => <input className="input" type="text" {...props} />;

type CheckboxProps = Omit<ComponentProps<"input">, "type">;

const Checkbox = ({ children, ...others }: CheckboxProps) => (
  <label className="checkboxArea">
    <input className="hiddenCheckbox" type={"checkbox"} {...others} />
    <span className="checkbox" />
    {children}
  </label>
);

interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => (
  <button className="addButton" type="button" onClick={onClick}>
    <img className="icon" src="/assets/seeker/formsection-add.svg" alt="내용 추가하기" />
    <span className="text">내용 추가하기</span>
  </button>
);

export default Object.assign(FormSection, {
  Title,
  Row,
  Cell,
  Input,
  Checkbox,
  AddButton,
});
