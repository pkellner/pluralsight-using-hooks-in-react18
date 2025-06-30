"use server";

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
    const firstName = (payload.firstName ?? "").toString().trim();
    const lastName = (payload.lastName ?? "").toString().trim();
    const email = (payload.email ?? "").toString().trim();

    if (!firstName) return { error: "First name is required" };
    if (!lastName || lastName.length < 2) {
      return {
        error: "Last Name > 1 char is required",
      };
    }
    if (!email) return { error: "Email is required" };

    return {
      error: null,
      fields: { firstName, lastName, email },
    };
  }
}
