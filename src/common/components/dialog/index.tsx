import React, { ComponentProps, createContext, ReactNode, useContext } from "react";
import classNames from "classnames";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { useID } from "@/common/utils/StringUtils";
import "@/common/components/dialog/Dialog.scoped.scss";

interface DialogData {
  titleID: string;
  descriptionID: string;
}

/**
 * Dialog에서 하위에 있는 component들에게 필요한 데이터들을 (props 안 쓰고) 전해주기 위해 사용.
 *
 * ```text
 * <Dialog> -------------+
 *   ...                 | DialogData 생성해서 전달.
 *   <DialogContent/> <--+
 *   ...
 * </Dialog>
 * ```
 */
const DialogContext = createContext<DialogData>({} as DialogData);

interface DialogProps {
  isOpen: boolean;
  // 배경 클릭으로 닫는거 허용할지.
  disableBackdropClick?: boolean;
  // ESC 키로 닫는거 허용할지.
  disableEscapeKey?: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Dialog 최상위 component.
 * Modal 기능 및 하얀 박스 영역을 제공.
 *
 * @example
 * const App = () => {
 *   const [isDialogOpen, setDialogOpen] = useState(false);
 *
 *   return (
 *     <Dialog isOpen={isDialogOpen} onClose={...}>
 *       <Dialog.Content title="제목">
 *         설명
 *       </Dialog.Content>
 *       <Dialog.Footer>
 *         <Dialog.Button onClick={...}>확인</Dialog.Button>
 *       </Dialog.Footer>
 *     <Dialog/>
 *   );
 * };
 */
const Dialog = ({ isOpen, disableBackdropClick = false, disableEscapeKey = false, onClose, children }: DialogProps) => {
  const titleID = useID();
  const descriptionID = useID();

  const dialogData: DialogData = {
    titleID,
    descriptionID,
  };

  const handleCloseModal: ComponentProps<typeof Modal>["onClose"] = (event, reason) => {
    if (disableBackdropClick && reason === "backdropClick") {
      return;
    }

    if (disableEscapeKey && reason === "escapeKeyDown") {
      return;
    }

    onClose();
  };

  return (
    <DialogContext.Provider value={dialogData}>
      <Modal
        aria-labelledby={titleID}
        aria-describedby={descriptionID}
        open={isOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className="dialog">{children}</div>
        </Fade>
      </Modal>
    </DialogContext.Provider>
  );
};

interface DialogContentProps {
  title: string;
  children: ReactNode;
}

/**
 * Dialog의 내용물 부분.
 * 제목 및 설명을 스타일링해줌.
 */
const DialogContent = ({ title, children }: DialogContentProps) => {
  const { titleID, descriptionID } = useContext(DialogContext);

  return (
    <div className="dialogContent">
      <div className="dialogTitle" id={titleID}>
        {title}
      </div>
      <div className="dialogDescription" id={descriptionID}>
        {children}
      </div>
    </div>
  );
};

interface DialogFooterProps {
  children: ReactNode;
}

/**
 * Dialog의 아래쪽 영역.
 * 주로 버튼들을 넣음.
 */
const DialogFooter = ({ children }: DialogFooterProps) => <div className="dialogFooter">{children}</div>;

interface DialogButtonProps {
  fill?: boolean;
  children: ReactNode;
  onClick: () => void;
}

/**
 * Dialog 아래쪽에 들어가는 각 버튼.
 */
const DialogButton = ({ fill = false, children, onClick }: DialogButtonProps) => (
  <button className={classNames("dialogButton", { fill })} type="button" onClick={onClick}>
    {children}
  </button>
);

export default Object.assign(Dialog, {
  Content: DialogContent,
  Footer: DialogFooter,
  Button: DialogButton,
});
