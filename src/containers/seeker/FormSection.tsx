import React, { ChangeEvent, ComponentProps, ReactNode } from "react";

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
  span?: number;
}

const Cell = ({ span = 1, children }: CellProps) => (
  <div className="cell" style={{ flex: span }}>
    {children}
  </div>
);

type InputProps = ComponentProps<"input">;

const Input = (props: InputProps) => <input className="input" type="text" {...props} />;

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
  AddButton,
});
