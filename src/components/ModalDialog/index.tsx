import type { PropsWithChildren, ReactNode } from "react";

type ModalDialogProps = PropsWithChildren & {
  modalId: string; // can't use useId hook in server components
  modalTrigger: ReactNode;
};

function ModalDialog({ children, modalId, modalTrigger }: ModalDialogProps) {
  return (
    <>
      {modalTrigger}
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
    </>
  );
}

export default ModalDialog;
