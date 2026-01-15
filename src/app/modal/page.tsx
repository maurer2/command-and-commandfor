import ModalDialog, { ModalDialogNextHelper } from "@/components/ModalDialog";
import SignupForm from "@/components/SignupForm";

import "./styles.css";

export default function ModalPage() {
  const modalId = "modal-dialog";

  return (
    <main className="modal-page">
      <h2>Modal</h2>

      <section>
        <h3 id="invoker-details">Invoker details</h3>
        <dl className="invoker-details" aria-labelledby="invoker-details">
          <dt>command</dt>
          <dd>"show-modal"</dd>
          <dt>commandfor</dt>
          <dd>"{modalId}"</dd>
          <dt>
            <span className="strike-through">interestfor</span>
          </dt>
          <dd>-</dd>
        </dl>
      </section>

      <section className="example">
        <h3>Example</h3>
        <ModalDialogNextHelper>
          <ModalDialog.Root modalId={modalId}>
            <ModalDialog.Trigger>
              <button
                type="button"
                aria-haspopup={modalId}
                // @ts-expect-error too-new
                commandfor={modalId}
                command="show-modal"
              >
                Open form in modal
              </button>
            </ModalDialog.Trigger>
            <ModalDialog.Element>
              <SignupForm />
            </ModalDialog.Element>
          </ModalDialog.Root>
        </ModalDialogNextHelper>
      </section>
    </main>
  );
}
