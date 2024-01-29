import { SModalWrapper, SModal, SModalClose } from "@src/components/Modal";
import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  scrollBlock?: boolean;
}

export function Modal({ open, setOpen, scrollBlock }: ModalProps) {
  
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
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <SModal>
        <SModalClose onClick={() => setOpen(false)}>X</SModalClose>
        the thext
      </SModal>
    </SModalWrapper>
  );
}
