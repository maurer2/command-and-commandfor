import "./styles.css";

export async function savePostData(formData: FormData) {
  "use server";

  console.log("Received form data:", Object.fromEntries(formData.entries()));
}

export default function ModalPage() {
  return (
    <main className="modal-page">
      <h2>Modal</h2>

      <div className="example">
        <button
          type="button"
          aria-haspopup="menu"
          // @ts-expect-error too-new
          commandfor="modal"
          command="show-modal"
        >
          Open form in modal
        </button>

        <dialog id="modal" closedby="any">
          {/* action overrides method="dialog" attribute in nextjs */}
          <form method="dialog" action={savePostData}>
            <label htmlFor="name">Name</label>
            <input defaultValue="Test" name="name" id="name" />
            <button type="submit">Submit</button>

            <button
              type="button"
              // @ts-expect-error too-new
              commandfor="modal"
              command="close"
            >
              Close
            </button>
          </form>
        </dialog>
      </div>
    </main>
  );
}
