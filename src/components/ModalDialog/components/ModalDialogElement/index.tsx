"use client";

import { useCallback, useMemo, type ComponentType } from "react";

import { useModalDialogContext } from "../ModalDialogProvider";

type ChildElementExposedProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};
type ModalDialogProps = {
  ChildComponent: ComponentType<ChildElementExposedProps>;
};

export function ModalDialogElement({ ChildComponent }: ModalDialogProps) {
  const { dialogRef, modalId } = useModalDialogContext();

  const handleClose = useCallback(() => {
    dialogRef.current?.close();

    console.log("close");
  }, []);

  const handleShow = useCallback(() => {
    dialogRef.current?.showModal();

    console.log("show");
  }, []);

  // adapter between parent methods and methods exposed by child components
  const childProps: ChildElementExposedProps = useMemo(
    () => ({
      onSubmit: handleClose,
      onCancel: handleClose,
    }),
    [handleClose]
  );

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
        <ChildComponent {...childProps} />
      </div>
    </dialog>
  );
}
