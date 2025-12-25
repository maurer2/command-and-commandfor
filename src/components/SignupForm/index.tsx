"use client";

import { saveFormData } from "@/app/actions/actions";

function SignupForm() {
  return (
    <form method="dialog" action={saveFormData}>
      <label htmlFor="name">Name</label>
      <input defaultValue="" name="name" id="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
