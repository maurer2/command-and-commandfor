"use client";

import { useActionState, startTransition, type FormEvent } from "react";
import { saveFormData } from "@/app/actions/actions";

// type SaveFormDataState = Parameters<typeof saveFormData>[0];

function SignupForm() {
  const [formState, triggerSaveFormData, isPending] = useActionState(
    saveFormData,
    {
      fields: {
        name: {
          value: "",
        },
      },
      isValid: true,
    }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      await triggerSaveFormData(formData);
    });
  };

  return (
    <form method="dialog" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          defaultValue={formState.fields.name.value}
          name="name"
          id="name"
          autoComplete="given-name"
          aria-invalid={formState.fields.name.error ? "true" : "false"}
          aria-describedby={
            formState.fields.name.error ? "name-error" : undefined
          }
        />
        {Boolean(formState.fields.name.error) ? (
          <p id="name-error">{formState.fields.name.error}</p>
        ) : null}
      </div>

      <button type="submit">Submit</button>

      {Boolean(formState.message) ? (
        <p role="status" aria-live="polite">
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}

export default SignupForm;
