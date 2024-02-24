import { PropsWithChildren, useEffect } from "react";
import { SModalWrapper, SModal, SModalClose } from "@src/components/Modal";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface ModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  scrollBlock?: boolean;
}

export function Modal({
  children,
  open,
  setOpen,
  scrollBlock,
}: PropsWithChildren<ModalProps>) {
  const { setRegistering, registering } = useGlobalProvider();

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
      <SModal registering={registering}>
        <SModalClose
          onClick={() => {
            setOpen(false);
            setRegistering(false);
          }}
        >
          X
        </SModalClose>
        {children}
      </SModal>
    </SModalWrapper>
  );
}
