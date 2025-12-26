"use client";

import { useActionState, startTransition, useRef } from "react";
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

  const handleFormAction = async (formData: FormData) => {
    startTransition(async () => {
      await triggerSaveFormData(formData);
    });
  };

  return (
    <form action={handleFormAction}>
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
