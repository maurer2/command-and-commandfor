"use server";

type SaveFormDataState = {
  fields: {
    name: {
      value: string;
      error?: string;
    };
  };
  isValid: boolean;
  message?: string;
};

export async function saveFormData(
  prevState: SaveFormDataState,
  formData: FormData
) {
  console.log("Received form data:", Object.fromEntries(formData.entries()));

  const newFormState = structuredClone(prevState);
  const name = formData.get("name");

  if (typeof name !== "string" || name.trim() === "") {
    newFormState.fields.name.error = "Name is required";
    newFormState.isValid = false;
    newFormState.message = undefined;

    return newFormState;
  }

  newFormState.fields.name.value = "";
  newFormState.fields.name.error = undefined;
  newFormState.isValid = true;
  newFormState.message = "Great Success";

  return newFormState;
}
