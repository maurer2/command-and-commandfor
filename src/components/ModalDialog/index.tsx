"use client";

import {
  useRef,
  type PropsWithChildren,
  type ReactNode,
  type ComponentType,
} from "react";

import { ModalDialogProvider } from "./components/ModalDialogProvider";
import { ModalDialogElement } from "./components/ModalDialogElement";

type ChildElementExposedProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

type ModalDialogProps = PropsWithChildren & {
  modalId: string;
  modalTrigger: ReactNode;
  ChildComponent: ComponentType<ChildElementExposedProps>;
};

function ModalDialog({
  children,
  modalId,
  modalTrigger,
  ChildComponent,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalDialogProvider modalId={modalId} dialogRef={dialogRef}>
      {modalTrigger}
      <ModalDialogElement ChildComponent={ChildComponent} />
    </ModalDialogProvider>
  );
}

export default ModalDialog;
