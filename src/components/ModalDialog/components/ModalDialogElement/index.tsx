"use client";

import {
  useCallback,
  type ReactElement,
  type ComponentPropsWithRef,
} from "react";

import { useModalDialogContext } from "../ModalDialogProvider";
import { ModalDialogAdapter } from "../ModalDialogAdapter";

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

  const handleClose = useCallback(() => {
    dialogRef.current?.close();

    console.log("close");
  }, []);

  const handleShow = useCallback(() => {
    dialogRef.current?.showModal();

    console.log("show");
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
      <div className="content">
        <ModalDialogAdapter onSubmit={handleClose}>
          {children}
        </ModalDialogAdapter>
      </div>
    </dialog>
  );
}
