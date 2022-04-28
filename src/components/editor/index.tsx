import React, { HTMLInputTypeAttribute, ReactNode, useRef, useState } from "react";
import classNames from "classnames";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { openFileDialog } from "@/utils/FileUtils";
import { useID } from "@/utils/StringUtils";
import "@/components/editor/Editor.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

const Editor = ({ children }: LayoutProps) => <div className="editor">{children}</div>;

const Title = ({ children }: LayoutProps) => <div className="title">{children}</div>;

const Row = ({ children }: LayoutProps) => <div className="row">{children}</div>;

interface CellProps extends LayoutProps {
  fill?: boolean;
}

const Cell = ({ fill = false, children }: CellProps) => <div className={classNames("cell", { fill })}>{children}</div>;

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = ({ label, type = "text", value = "", onChange }: InputProps) => {
  const id = useID();

  return (
    <div className="inputArea">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        value={value}
        onChange={event => {
          onChange && onChange(event.target.value);
        }}
      />
    </div>
  );
};

interface SelectProps<Value> {
  label: string;
  options: Array<{ name: string; value: Value }>;
  value?: Value;
  onChange?: (value: Value) => void;
}

const Select = <Value,>({ label, options, value = options[0].value, onChange }: SelectProps<Value>) => {
  const [isOpen, setOpen] = useState(false);

  const id = useID();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const inputElement = buttonRef.current;

  const handleClickInput = () => {
    setOpen(true);
  };

  const handleClickOption = (value: Value) => {
    onChange && onChange(value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let currentName = "";

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      currentName = options[i].name;
      break;
    }
  }

  return (
    <div className="inputArea">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <button className="input" id={id} ref={buttonRef} onClick={handleClickInput}>
        {currentName}
        <img className="icon" src="/assets/editor/select-down.svg" alt="선택" />
      </button>
      {inputElement !== null && (
        <Menu
          open={isOpen}
          onClose={handleClose}
          anchorEl={inputElement}
          // Menu 열었을 때 스크롤바 사라지는 현상 방지.
          disableScrollLock
        >
          {options.map(option => (
            <MenuItem
              sx={{
                width: inputElement.clientWidth,
              }}
              key={option.name}
              onClick={() => {
                handleClickOption(option.value);
              }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

interface CheckboxProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  children: ReactNode;
}

const Checkbox = ({ value = false, children, onChange }: CheckboxProps) => (
  <label className="checkboxArea">
    <input
      className="hiddenCheckbox"
      type={"checkbox"}
      checked={value}
      onChange={event => {
        onChange && onChange(event.target.checked);
      }}
    />
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

  onUpload?: (files: Array<File>) => void;
}

const FileUploader = ({ accept = ".pdf,.hwp", onUpload }: FileUploaderProps) => {
  const handleClickUpload = async () => {
    const files = await openFileDialog(accept, true);
    onUpload && onUpload(files);
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

export default Object.assign(Editor, {
  Title,
  Row,
  Cell,
  Input,
  Select,
  Checkbox,
  AddButton,
  FileUploader,
});