export async function signupAction(previousState, formData) {
  const firstName = (formData.get("firstName") ?? "").toString();
  const lastName  = (formData.get("lastName")  ?? "").toString();
  const email     = (formData.get("email")     ?? "").toString();

  await new Promise(r => setTimeout(r, 2000));   // simulate work

  const values = { firstName, lastName, email };

  if (!firstName.trim()) {
    return {
      ...values,
      message: "First name is required",
      isSuccess: false,
      submitting: false,
    };
  }
  if (!lastName.trim() || lastName.trim().length < 2) {
    return {
      ...values,
      message: "Last Name > 2 char is required",
      isSuccess: false,
      submitting: false,
    };
  }
  if (!email.trim()) {
    return {
      ...values,
      message: "Email is required",
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
      lastName : "",
      email    : "",
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
