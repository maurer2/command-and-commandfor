"use client";

import { type ReactElement, type ComponentPropsWithRef } from "react";

import { useModalDialogContext } from "../ModalDialogProvider";
import { ModalDialogAdapter } from "../ModalDialogAdapter";
import "./styles.css";

type ModalDialogAdapterProps = ComponentPropsWithRef<typeof ModalDialogAdapter>;

// can't use PropsWithChildren as it is too generic
// children must have at least onSubmit and onCancel props but could have more
type ModalDialogElementProps<T extends ModalDialogAdapterProps> = {
  children: ReactElement<T>;
};

export function ModalDialogElement<T extends ModalDialogAdapterProps>({
  children,
}: ModalDialogElementProps<T>) {
  const { dialogRef, modalId } = useModalDialogContext();

  const handleClose = () => {
    dialogRef.current?.close();

    console.log("close");
  };

  const handleShow = () => {
    dialogRef.current?.showModal();

    console.log("show");
  };

  return (
    <dialog id={modalId} closedby="any" open={false} className="modal-dialog">
      <button
        type="button"
        // @ts-expect-error too-new
        commandfor={modalId}
        command="close"
        className="close-button"
        aria-label="Close modal"
      >
        X
      </button>
      <div className="modal-content">
        <ModalDialogAdapter onSubmit={handleClose} onCancel={handleShow}>
          {children}
        </ModalDialogAdapter>
      </div>
    </dialog>
  );
}
