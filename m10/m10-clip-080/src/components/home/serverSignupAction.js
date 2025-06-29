// server-signup-action.js
"use server";

export async function serverSignupAction(_, formData) {
  const payload = Object.fromEntries(formData);
  const firstName = (payload.firstName ?? "").toString().trim();
  const lastName = (payload.lastName ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim();

  await new Promise((r) => setTimeout(r, 2000)); // simulate work

  let error = validate({ firstName, lastName, email });

  if (email === "bad@email.com") {
    error = "Invalid email address provided";
  }

  if (error) {
    return {
      ...payload,
      message: error,
      isSuccess: false,
      submitting: false,
    };
  }

  return {
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
