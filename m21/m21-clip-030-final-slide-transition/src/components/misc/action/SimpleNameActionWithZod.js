import { signupSchema } from "../signupSchema";


export async function signupAction(previousState, formData) {
  const firstName = (formData.get("firstName") ?? "").toString();
  const lastName = (formData.get("lastName") ?? "").toString();
  const email = (formData.get("email") ?? "").toString();

  await new Promise((r) => setTimeout(r, 2000)); // simulate work

  const values = { firstName, lastName, email };

  // Validate using Zod schema
  const validationResult = signupSchema.safeParse(values);

  if (!validationResult.success) {
    const firstError = validationResult.error.errors[0];
    return {
      ...values,
      message: firstError.message,
      isSuccess: false,
      submitting: false,
    };
  }

  try {
    const urlFormData = new URLSearchParams(values);

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlFormData,
    });

    if (!response.ok) {
      const { error } = await response.json();
      return {
        ...values,
        message: error,
        isSuccess: false,
        submitting: false,
      };
    }

    const { message } = await response.json();
    return {
      firstName: "",
      lastName: "",
      email: "",
      message,
      isSuccess: true,
      submitting: false,
    };
  } catch {
    return {
      ...values,
      message: "Network error occurred",
      isSuccess: false,
      submitting: false,
    };
  }
}