export async function restSignupAction(previousState, formData) {
  const payload = Object.fromEntries(formData);

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const { message = "Unexpected error" } = await response.json().catch(() => ({}));
      return { ...previousState, isSuccess: false, message };
    }

    const json = await response.json();
    return {
      ...previousState,
      firstName: json.firstName ?? previousState.firstName,
      lastName: json.lastName ?? previousState.lastName,
      email: json.email ?? previousState.email,
      isSuccess: true,
      message: "Thank you for signing up!",
    };
  } catch (error) {
    return {
      ...previousState,
      isSuccess: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}
