"use client";

import { useRef, type PropsWithChildren, type ReactNode } from "react";

import { ModalDialogProvider } from "./components/ModalDialogProvider";
import { ModalDialogElement } from "./components/ModalDialogElement";

type ModalDialogProps = PropsWithChildren & {
  modalId: string;
  modalTrigger: ReactNode;
};

function ModalDialog({ children, modalId, modalTrigger }: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalDialogProvider modalId={modalId} dialogRef={dialogRef}>
      {modalTrigger}
      <ModalDialogElement>{children}</ModalDialogElement>
    </ModalDialogProvider>
  );
}

export default ModalDialog;
