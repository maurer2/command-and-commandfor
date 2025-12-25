"use server";

export async function saveFormData(formData: FormData) {
  console.log("Received form data:", Object.fromEntries(formData.entries()));
}
