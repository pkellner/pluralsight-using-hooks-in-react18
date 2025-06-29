export async function restSignupAction(_, formData) {
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
      const { error = "Unexpected error" } = await response.json().catch(() => ({}));
      return { ...payload, isSuccess: false, message: error };
    }
    const json = await response.json();
    return {
      firstName: "",
      lastName: "",
      email: "",
      isSuccess: true,
      message: json.message,
    };
  } catch (error) {
    return {
      ...payload,
      isSuccess: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}
