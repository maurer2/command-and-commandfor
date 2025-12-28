"use client";

import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";

import { ModalDialogProvider } from "./components/ModalDialogProvider";
import { ModalDialogElement } from "./components/ModalDialogElement";

type ModalDialogElementProps = ComponentPropsWithoutRef<
  typeof ModalDialogElement
>;

type ModalDialogProps = {
  modalId: string;
  ModalTrigger: ReactNode;
  ChildComponent: ModalDialogElementProps["ChildComponent"];
};

function ModalDialog({
  modalId,
  ModalTrigger,
  ChildComponent,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalDialogProvider modalId={modalId} dialogRef={dialogRef}>
      {ModalTrigger}
      <ModalDialogElement ChildComponent={ChildComponent} />
    </ModalDialogProvider>
  );
}

export default ModalDialog;
