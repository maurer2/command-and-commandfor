"use client";

import { useActionState, startTransition, type FormEvent } from "react";
import { saveFormData } from "@/app/actions/actions";

import "./styles.css";

// type SaveFormDataState = Parameters<typeof saveFormData>[0];

type SignupFormProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
  canDoStuff?: boolean; // test extra prop
};

function SignupForm({ onSubmit, onCancel }: SignupFormProps) {
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
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      await triggerSaveFormData(formData);
    });

    onSubmit?.();
    onCancel?.();
  };

  return (
    <form method="dialog" onSubmit={handleSubmit} className="signup-form">
      <div className="field-wrapper">
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
          <p id="name-error" className="field-error">
            {formState.fields.name.error}
          </p>
        ) : null}
      </div>

      <button type="submit">Add name</button>

      {Boolean(formState.message) ? (
        <p role="status" aria-live="polite" className="form-status">
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}

export default SignupForm;
