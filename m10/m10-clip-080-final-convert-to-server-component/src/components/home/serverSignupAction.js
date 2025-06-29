"use server";

// server-signup-action.js
export async function serverSignupAction(previousState, formData) {
  const firstName = (formData.get("firstName") ?? "").toString().trim();
  const lastName = (formData.get("lastName") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();

  await new Promise((r) => setTimeout(r, 2000)); // simulate work

  let error = validate({ firstName, lastName, email });

  if (email === "bad@email.com") {
    error = "Invalid email address provided";
  }

  if (error) {
    // single error return
    return {
      firstName,
      lastName,
      email,
      message: error,
      isSuccess: false,
      submitting: false,
    };
  }

  // success return
  return {
    ...previousState,
    firstName: "",
    lastName: "",
    email: "",
    isSuccess: true,
    message: `${firstName} ${lastName} at ${email} registration is successful`,
  };
}

function validate({ firstName, lastName, email }) {
  if (!firstName) return "First name is required";
  if (!lastName || lastName.length < 2) return "Last Name > 2 char is required";
  if (!email) return "Email is required";
  return null; // no errors
}
