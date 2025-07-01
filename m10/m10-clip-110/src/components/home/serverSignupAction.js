"use server";

import { signupSchema } from "./signupSchema";

export async function serverSignupAction(_, formData) {
  const payload = Object.fromEntries(formData);
  await new Promise((r) => setTimeout(r, 2000));

  const validationResult = validate(payload);

  if (validationResult.error) {
    return {
      ...payload,
      message: validationResult.error,
      isSuccess: false,
      submitting: false,
    };
  }

  const { firstName, lastName, email } = validationResult.fields;

  if (email === "bad@email.com") {
    return {
      ...payload,
      message: "Invalid email address provided",
      isSuccess: false,
      submitting: false,
    };
  }

  return {
    firstName: "",
    lastName: "",
    email: "",
    isSuccess: true,
    message: `${firstName} ${lastName} at ${email} registration successful`,
  };

  function validate(payload) {
    
    const zodResult = signupSchema.safeParse(payload);

    if (!zodResult.success) {
      return {
        error: zodResult.error.errors[0].message
      };
    }

    return {
      error: null,
      fields: zodResult.data,
    };
  }
}
