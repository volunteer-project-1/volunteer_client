import React, { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

import "@/containers/seeker/FormSection.scoped.scss";
import { openFileDialog } from "@/utils/FileUtils";

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

interface FileUploaderProps {
  // 어떤 종류의 파일들을 허용할지.
  // (기본값: PDF, HWP)
  accept?: string;

  onUpload: (files: Array<File>) => void;
}

const FileUploader = ({ accept = ".pdf,.hwp", onUpload }: FileUploaderProps) => {
  const handleClickUpload = async () => {
    const files = await openFileDialog(accept, true);
    onUpload(files);
  };

  return (
    <div className="fileUploader">
      <div className="fileList">
        <div className="iconArea">
          <img className="icon" src="/assets/seeker/formsection-file.svg" alt="파일 업로드" />
        </div>
        <div className="message">포트폴리오를 첨부하여 주세요 (클릭하거나 드래그하여 첨부)</div>
        <button className="uploadButton" onClick={handleClickUpload}>
          파일첨부 하기
        </button>
      </div>
    </div>
  );
};

export default Object.assign(FormSection, {
  Title,
  Row,
  Cell,
  Input,
  Checkbox,
  AddButton,
  FileUploader,
});
