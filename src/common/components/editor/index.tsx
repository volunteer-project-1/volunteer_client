import React, { DragEvent, HTMLInputTypeAttribute, KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AllOptional } from "@/common/types/Common";
import { openFileDialog } from "@/common/utils/FileUtils";
import { useID } from "@/common/utils/StringUtils";
import { dLog } from "@/common/utils/DebugUtils";
import "@/common/components/editor/Editor.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

const Editor = ({ children }: LayoutProps) => <div className="editor">{children}</div>;

const Title = ({ children }: LayoutProps) => <div className="title">{children}</div>;

const Row = ({ children }: LayoutProps) => <div className="row">{children}</div>;

const Separator = () => <div className="separator" />;

interface CellProps extends LayoutProps {
  layout?: "row" | "column";
  fill?: boolean;
}

const Cell = ({ layout = "row", fill = false, children }: CellProps) => (
  <div
    className={classNames("cell", {
      fill,
      rowLayout: layout === "row",
      columnLayout: layout === "column",
    })}
  >
    {children}
  </div>
);

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

/**
 * 주소 입력을 받을 때 사용하는 함수.
 */
function readAddress() {
  return new Promise<{ sido: string; sigungu: string }>((resolve, reject) => {
    dLog("주소 찾기 여는 중...");

    const popup = new (window as any).daum.Postcode({
      oncomplete: (data: any) => {
        resolve({
          sido: data.sido ?? "",
          sigungu: data.sigungu ?? "",
        });
      },
    });

    popup.open();
  });
}

interface AddressBaseProps {
  className: string;
  id?: string;
  placeholder: string;
  isRequired?: boolean;
  value?: AllOptional<Address>;
  onChange?: (value: Address) => void;
}

const AddressBase = ({ className, id, placeholder, isRequired = false, value, onChange }: AddressBaseProps) => {
  // 상태랑 연결이 안 되어 있어도 일단 작성은 되도록 함.
  // (onChange가 없으면 uncontrolled component로 작동.)
  const isDummy = typeof onChange === "undefined";

  const handleClick = async () => {
    onChange && onChange(await readAddress());
  };

  return (
    <input
      className={className}
      id={id}
      type="text"
      placeholder={`${placeholder}${isRequired ? "*" : ""}`}
      value={isDummy ? undefined : value ? `${value.sido ?? ""} ${value.sigungu ?? ""}`.trim() : ""}
      onClick={handleClick}
      readOnly
    />
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

const SmallAddress = ({ placeholder, isRequired = false, value, onChange }: SmallAddressProps) => (
  <div className="smallInputArea">
    <AddressBase
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isRequired={isRequired}
    />
  </div>
);

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

interface LargeAddressProps {
  label: string;
  value?: AllOptional<Address>;
  onChange?: (value: Address) => void;
}

const LargeAddress = ({ label, value, onChange }: LargeAddressProps) => {
  const id = useID();

  return (
    <div className="largeInputArea">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <AddressBase className="input" id={id} value={value} onChange={onChange} placeholder="" />
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

interface SmallAddButtonProps {
  onClick: () => void;
}

const SmallAddButton = ({ onClick }: SmallAddButtonProps) => (
  <button className="smallAddButton" type="button" onClick={onClick}>
    + 내용 추가하기
  </button>
);

interface LargeAddButtonProps {
  onClick: () => void;
}

const LargeAddButton = ({ onClick }: LargeAddButtonProps) => (
  <button className="largeAddButton" type="button" onClick={onClick}>
    <img className="icon" src="/assets/editor/add.svg" alt="내용 추가하기" />
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
  let extensions: Array<string>;

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
        return <div className="documentResult">📄</div>;
      case "video":
        return (
          <video className="videoResult" src={url} controls>
            <track kind="captions" />
          </video>
        );
      case "image":
        return <img className="imageResult" src={url} alt="업로드한 이미지" />;
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
          <img className="icon" src="/assets/editor/file.svg" alt="파일 업로드" />
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

interface ImageUploaderProps {
  label: string;
  url?: string | null;
  onUpload?: (file: File) => void;
}

const ImageUploader = ({ label, url, onUpload }: ImageUploaderProps) => {
  const extensions = ["jpg", "jpeg", "bmp", "png", "gif", "svg"];

  const uploadFile = (file: File) => {
    let matchExtensions = false;

    for (let i = 0; i < extensions.length; i++) {
      if (file.name.endsWith(extensions[i])) {
        matchExtensions = true;
        break;
      }
    }

    if (!matchExtensions) {
      dLog(`${file.name}: ${extensions.join(", ")}에 해당하지 않음.`);
      return;
    }

    dLog(`업로드 목록: ${file.name}`);
    onUpload && onUpload(file);
  };

  const handleClickUpload = async () => {
    const accept = extensions.map(extension => `.${extension}`).join(",");
    const files = await openFileDialog(accept, false);
    uploadFile(files[0]);
  };

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    uploadFile(Array.from(files)[0]);
  };

  const handleDrag = async (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className="imageUploader"
      onDrop={handleDrop}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
    >
      <div className="resultArea">{url && <img className="result" src={url} alt="파일 업로드" />}</div>
      <button className="uploadButton" onClick={handleClickUpload}>
        {label}
      </button>
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
  LargeAddress,
  LargeSelect,
  TextArea,
  Checkbox,
  SmallAddButton,
  LargeAddButton,
  FileUploader,
  ImageUploader,
});
