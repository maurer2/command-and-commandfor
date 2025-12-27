"use client";

import { useCallback, type PropsWithChildren } from "react";

import { useModalDialogContext } from "../ModalDialogProvider";

type ModalDialogProps = PropsWithChildren;

export function ModalDialogElement({ children }: ModalDialogProps) {
  const { dialogRef, modalId } = useModalDialogContext();

  const handleClose = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // shouldn't be needed
  const handleShow = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog id={modalId} closedby="any" open={false}>
      <button
        type="button"
        // @ts-expect-error too-new
        commandfor={modalId}
        command="close"
        className="close-button"
      >
        Close
      </button>
      <div className="content">{children}</div>
    </dialog>
  );
}
