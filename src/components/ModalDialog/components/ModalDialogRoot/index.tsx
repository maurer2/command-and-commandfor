"use client";

import {
  useRef,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
} from "react";

import { ModalDialogProvider } from "../ModalDialogProvider";
import { ModalDialogElement } from "../ModalDialogElement";

type ModalDialogElementProps = ComponentPropsWithoutRef<
  typeof ModalDialogElement
>;

type ModalDialogProps = PropsWithChildren<{
  modalId: string;
  ChildComponent: ModalDialogElementProps["ChildComponent"];
}>;

export function ModalDialogRoot({
  children,
  modalId,
  ChildComponent,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalDialogProvider modalId={modalId} dialogRef={dialogRef}>
      {children}
      <ModalDialogElement ChildComponent={ChildComponent} />
    </ModalDialogProvider>
  );
}
