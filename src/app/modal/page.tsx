import ModalDialog from "@/components/ModalDialog";
import SignupForm from "@/components/SignupForm";

import "./styles.css";

export default function ModalPage() {
  const modalId = "modal-dialog";

  return (
    <main className="modal-page">
      <h2>Modal</h2>

      <div className="example">
        <ModalDialog
          modalId={modalId}
          modalTrigger={
            <button
              type="button"
              aria-haspopup="modal"
              // @ts-expect-error too-new
              commandfor={modalId}
              command="show-modal"
            >
              Open form in modal
            </button>
          }
          // can't be <SignupForm />
          ChildComponent={SignupForm}
        />
      </div>
    </main>
  );
}
