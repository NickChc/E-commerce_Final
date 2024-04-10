import { PropsWithChildren, useEffect } from "react";
import { SModalWrapper, SModal, SModalClose } from "@src/components/Modal";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CloseIcon } from "@src/assets/icons";

interface ModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  scrollBlock?: boolean;
  small?: boolean;
}

export function Modal({
  children,
  open,
  setOpen,
  scrollBlock,
}: PropsWithChildren<ModalProps>) {
  const { setRegistering } = useGlobalProvider();

  useEffect(() => {
    if (!scrollBlock) return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return;
  return (
    <SModalWrapper
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
          setRegistering(false);
        }
      }}
    >
      <SModal>
        <SModalClose
          onClick={() => {
            setOpen(false);
            setRegistering(false);
          }}
        >
          <CloseIcon />
        </SModalClose>
        {children}
      </SModal>
    </SModalWrapper>
  );
}
