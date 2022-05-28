import React, { DragEvent, HTMLInputTypeAttribute, KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AllOptional } from "@/types/Common";
import ExternalAPI from "@/api/ExternalAPI";
import { openFileDialog } from "@/utils/FileUtils";
import { useID } from "@/utils/StringUtils";
import { dLog } from "@/utils/DebugUtils";
import "@/components/editor/Editor.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

const Editor = ({ children }: LayoutProps) => <div className="editor">{children}</div>;

const Title = ({ children }: LayoutProps) => <div className="title">{children}</div>;

const Row = ({ children }: LayoutProps) => <div className="row">{children}</div>;

const Separator = () => <div className="separator" />;

interface CellProps extends LayoutProps {
  fill?: boolean;
}

const Cell = ({ fill = false, children }: CellProps) => <div className={classNames("cell", { fill })}>{children}</div>;

interface SelectBaseProps<Value> {
  className: string;
  options: Array<{ name: string; value: Value }>;
  onChange?: (value: Value) => void;
  children: ReactNode;
}

/**
 * Select 구현에 사용되는 내부용 공통 component.
 */
const SelectBase = <Value,>({ className, options, onChange, children }: SelectBaseProps<Value>) => {
  const [isOpen, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const anchorElement = anchorRef.current;

  const handleClickSelect = () => {
    setOpen(true);
  };

  const handleKeyOnSelect = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setOpen(true);
    }
  };

  const handleClickOption = (newValue: Value) => {
    onChange && onChange(newValue);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={className}
        role="button"
        tabIndex={0}
        ref={anchorRef}
        onClick={handleClickSelect}
        onKeyDown={handleKeyOnSelect}
      >
        {children}
      </div>
      {anchorElement !== null && (
        <Menu
          open={isOpen}
          onClose={handleClose}
          anchorEl={anchorElement}
          // Menu 열었을 때 스크롤바 사라지는 현상 방지.
          disableScrollLock
        >
          {options.map(option => (
            <MenuItem
              sx={{
                width: anchorElement.clientWidth,
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
    </>
  );
};

interface SmallInputProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  value?: string | null;
  onChange?: (value: string) => void;
}

const SmallInput = ({ placeholder, type = "text", isRequired = false, value, onChange }: SmallInputProps) => {
  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  // type="date" 등의 경우 "년-월-일" 이런 표시가 placeholder를 가려버림.
  // focus 시에 type을 바꾸는 방법으로 focus 되었을 때에만 "년-월-일" 같은 표시가 보이도록 함.
  const defaultType = "text";
  const [currentType, setCurrentType] = useState<HTMLInputTypeAttribute>(defaultType);

  const handleOnFocus = () => {
    setCurrentType(type);
  };

  const handleOnBlur = () => {
    setCurrentType(defaultType);
  };

  return (
    <div className="smallInputArea">
      <input
        className="input"
        type={currentType}
        placeholder={`${placeholder}${isRequired ? "*" : ""}`}
        value={isDummy ? undefined : value ?? ""}
        onChange={
          isDummy
            ? undefined
            : event => {
                onChange && onChange(event.target.value);
              }
        }
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

interface Address {
  sido: string;
  sigungu: string;
}

interface SmallAddressProps {
  placeholder: string;
  isRequired?: boolean;
  value?: AllOptional<Address>;
  onChange?: (value: Address) => void;
}

const SmallAddress = ({ placeholder, isRequired = false, value, onChange }: SmallAddressProps) => {
  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  const handleClick = async () => {
    onChange && onChange(await ExternalAPI.readAddress());
  };

  return (
    <div className="smallInputArea">
      <input
        className="input"
        type="text"
        placeholder={`${placeholder}${isRequired ? "*" : ""}`}
        value={isDummy ? undefined : value ? `${value.sido ?? ""} ${value.sigungu ?? ""}`.trim() : ""}
        onClick={handleClick}
        readOnly
      />
    </div>
  );
};

interface SmallSelectProps<Value> {
  placeholder: string;
  options: Array<{ name: string; value: Value }>;
  isRequired?: boolean;
  value?: Value | null;
  onChange?: (value: Value) => void;
}

const SmallSelect = <Value,>({
  placeholder,
  options,
  isRequired = false,
  value,
  onChange,
}: SmallSelectProps<Value>) => {
  let currentName = "";

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      currentName = options[i].name;
      break;
    }
  }

  return (
    <SelectBase className="smallInputArea" options={options} onChange={onChange}>
      <input
        className="input"
        tabIndex={-1}
        readOnly
        placeholder={`${placeholder}${isRequired ? "*" : ""}`}
        value={currentName}
      />
      <img className="icon" src="/assets/editor/select-down.svg" alt="선택" />
    </SelectBase>
  );
};

interface LargeInputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  value?: string | null;
  onChange?: (value: string) => void;
}

const LargeInput = ({ label, type = "text", value, onChange }: LargeInputProps) => {
  const id = useID();

  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  return (
    <div className="largeInputArea">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        value={isDummy ? undefined : value ?? ""}
        onChange={
          isDummy
            ? undefined
            : event => {
                onChange && onChange(event.target.value);
              }
        }
      />
    </div>
  );
};

interface LargeSelectProps<Value> {
  label: string;
  options: Array<{ name: string; value: Value }>;
  value?: Value | null;
  onChange?: (value: Value) => void;
}

const LargeSelect = <Value,>({ label, options, value, onChange }: LargeSelectProps<Value>) => {
  const id = useID();

  let currentName = "";

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      currentName = options[i].name;
      break;
    }
  }

  return (
    <SelectBase className="largeInputArea" options={options} onChange={onChange}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} tabIndex={-1} readOnly value={currentName} />
      <img className="icon" src="/assets/editor/select-down.svg" alt="선택" />
    </SelectBase>
  );
};

interface TextAreaProps {
  placeholder: string;
  rowCount?: number;
  value?: string | null;
  onChange?: (value: string) => void;
}

const TextArea = ({ placeholder, rowCount = 5, value, onChange }: TextAreaProps) => {
  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  return (
    <div className="textAreaArea">
      <textarea
        className="textArea"
        placeholder={placeholder}
        rows={rowCount}
        value={isDummy ? undefined : value ?? ""}
        onChange={
          isDummy
            ? undefined
            : event => {
                onChange && onChange(event.target.value);
              }
        }
      />
    </div>
  );
};

interface CheckboxProps {
  value?: boolean | null;
  onChange?: (value: boolean) => void;
  children: ReactNode;
}

const Checkbox = ({ value = false, children, onChange }: CheckboxProps) => {
  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  return (
    <label className="checkboxArea">
      <input
        className="hiddenCheckbox"
        type={"checkbox"}
        checked={isDummy ? undefined : value ?? false}
        onChange={
          isDummy
            ? undefined
            : event => {
                onChange && onChange(event.target.checked);
              }
        }
      />
      <span className="checkbox" />
      {children}
    </label>
  );
};

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
  type: "document" | "video" | "image";
  // 여러 개 업로드 허용 여부.
  multiple?: boolean;
  results: Array<{ url: string }>;
  onUpload?: (files: Array<File>) => void;
}

const FileUploader = ({ type, multiple = false, results, onUpload }: FileUploaderProps) => {
  const [renderKey, setRenderKey] = useState(0);
  let extensions: Array<string>;

  // Hack: Google PDF 뷰어가 가끔 PDF를 안 띄우는 경우가 있음. -> 몇초 후에 강제로 rerender를 해서 해결.
  useEffect(() => {
    setTimeout(() => {
      setRenderKey(renderKey + 1);
    }, 2000);

    setTimeout(() => {
      setRenderKey(renderKey + 1);
    }, 4000);
  }, [results]);

  switch (type) {
    case "document":
      extensions = ["pdf", "hwp"];
      break;
    case "video":
      extensions = ["mp4"];
      break;
    case "image":
      extensions = ["jpg", "jpeg", "bmp", "png", "gif", "svg"];
      break;
    default:
      extensions = [];
      break;
  }

  const uploadFiles = (files: Array<File>) => {
    const filteredFiles = files.filter(file => {
      for (let i = 0; i < extensions.length; i++) {
        if (file.name.endsWith(extensions[i])) {
          return true;
        }
      }

      dLog(`${file.name}: ${extensions.join(", ")}에 해당하지 않음.`);
      return false;
    });

    dLog(`업로드 목록: ${filteredFiles.map(file => file.name).join(", ")}`);
    onUpload && onUpload(files);
  };

  const renderResult = (url: string) => {
    switch (type) {
      case "document":
        return (
          <iframe
            key={renderKey}
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`}
            title="업로드한 문서"
          />
        );
      case "video":
        return (
          <video src={url} controls>
            <track kind="captions" />
          </video>
        );
      case "image":
        return <img src={url} alt="업로드한 이미지" />;
      default:
        return null;
    }
  };

  const handleClickUpload = async () => {
    const accept = extensions.map(extension => `.${extension}`).join(",");
    const files = await openFileDialog(accept, multiple);
    uploadFiles(files);
  };

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    uploadFiles(Array.from(files));
  };

  const handleDrag = async (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className="fileUploader"
      onDrop={handleDrop}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
    >
      <div className="uploadArea">
        <div className="iconArea">
          <img className="icon" src="/assets/seeker/formsection-file.svg" alt="파일 업로드" />
        </div>
        <div className="message">포트폴리오를 첨부하여 주세요 (클릭하거나 드래그하여 첨부)</div>
        <button className="uploadButton" onClick={handleClickUpload}>
          파일첨부 하기
        </button>
      </div>
      {results.length > 0 && (
        <div className="resultArea">
          {results.map((result, index) => (
            <div className="file" key={index}>
              {renderResult(result.url)}
              <Link href={result.url}>
                <a className="download" target="_blank">
                  다운로드
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Object.assign(Editor, {
  Title,
  Row,
  Separator,
  Cell,
  SmallInput,
  SmallAddress,
  SmallSelect,
  LargeInput,
  LargeSelect,
  TextArea,
  Checkbox,
  AddButton,
  FileUploader,
});
