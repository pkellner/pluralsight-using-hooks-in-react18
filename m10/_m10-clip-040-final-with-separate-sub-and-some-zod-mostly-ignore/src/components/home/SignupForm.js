import { startTransition, useActionState, useState } from "react";
import SubmitButton from "./SubmitButton";

const SHOW_CLIENT_SIDE_VALIDATION_MESSAGE_FIRST = true;

const initialSignupState = {
  firstName: "",
  lastName: "",
  email: "",
  isSuccess: false,
  message: "",
};

async function restSignupAction(previousState, formData) {
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

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(restSignupAction, initialSignupState);
  const [clientMessage, setClientMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setClientMessage("");

    const formData = new FormData(event.currentTarget);

    // Basic empty-field validation
    const firstName = formData.get("firstName")?.toString().trim() ?? "";
    const lastName = formData.get("lastName")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";

    if (!firstName || !lastName || !email) {
      setClientMessage("All fields are required.");
      return;
    }

    if (SHOW_CLIENT_SIDE_VALIDATION_MESSAGE_FIRST) {
      setClientMessage("Validation passed!");
    }

    startTransition(() => {
      setClientMessage(""); // Clear message when request starts
      formAction(formData);
    });
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-card card">
          <div className="card-body">
            <h3 className="signup-title">Stay Informed</h3>
            <form onSubmit={handleSubmit}>
              <div className="signup-form-row">
                <input
                  type="text"
                  name="firstName"
                  className="signup-input form-control"
                  placeholder="First Name"
                  required
                  defaultValue={state.firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  className="signup-input form-control"
                  placeholder="Last Name"
                  required
                  defaultValue={state.lastName}
                />
              </div>
              <div className="signup-email-group">
                <input
                  type="email"
                  name="email"
                  className="signup-input form-control"
                  placeholder="Email Address"
                  required
                  defaultValue={state.email}
                />
              </div>
              <div className="signup-submit-row">
                <SubmitButton disabled={isPending} />
                <div className="signup-message-container">
                  {clientMessage && (
                    <div
                      className={`signup-message ${
                        clientMessage.includes("passed") ? "signup-success" : "signup-error"
                      }`}
                    >
                      <span
                        className={
                          clientMessage.includes("passed")
                            ? "signup-message-success-text"
                            : "signup-message-error-text"
                        }
                      >
                        {clientMessage}
                      </span>
                    </div>
                  )}
                  {state.message && !clientMessage && !isPending && (
                    <div className={`signup-message ${state.isSuccess ? "signup-success" : "signup-error"}`}>
                      <span
                        className={
                          state.isSuccess ? "signup-message-success-text" : "signup-message-error-text"
                        }
                      >
                        {state.message}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
