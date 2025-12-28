"use client";

import { useRef, type PropsWithChildren } from "react";

import { ModalDialogProvider } from "../ModalDialogProvider";

type ModalDialogProps = PropsWithChildren<{
  modalId: string;
}>;

export function ModalDialogRoot({ children, modalId }: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalDialogProvider modalId={modalId} dialogRef={dialogRef}>
      {children}
    </ModalDialogProvider>
  );
}
