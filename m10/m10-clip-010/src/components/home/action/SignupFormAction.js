"use server";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function signupAction(previousState, formData) {
  try {
    await delay(1000);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");

    // Validate first name
    if (!firstName || firstName.trim().length === 0) {
      return {
        success: false,
        error: "First name is required and cannot be empty",
        formData: { firstName, lastName, email },
      };
    }

    // Validate last name
    if (!lastName || lastName.trim().length < 2) {
      return {
        success: false,
        error: "Last Name > 2 char is required",
        formData: { firstName, lastName, email },
      };
    }

    // Validate email
    if (!email || email.trim().length === 0) {
      return {
        success: false,
        error: "Email is required and cannot be empty",
        formData: { firstName, lastName, email },
      };
    }

    if (email.toLowerCase() === "bad@email.com") {
      return {
        success: false,
        error: "Invalid email address provided",
        formData: { firstName, lastName, email },
      };
    }

    // Success response
    const successMessage = `${firstName.trim()} ${lastName.trim()} at ${email.trim()} registration is successful`;

    console.log(`Server Action: signup status: 200 - ${successMessage}`);

    return {
      success: true,
      message: successMessage,
      formData: { firstName: "", lastName: "", email: "" },
    };
  } catch (error) {
    console.error("Signup server action error:", error);
    return {
      success: false,
      error: "Internal server error",
      formData: { firstName: "", lastName: "", email: "" },
    };
  }
}
