import { startTransition, useActionState, useState } from "react";
import { signupAction } from "./action/SimpleNameActionWithZod";
import { initialSignupState, signupSchema } from "./signupSchema";
import SubmitButton from "./SubmitButton";

const SHOW_CLIENT_SIDE_VALIDATION_MESSAGE_FIRST = true;

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupAction, initialSignupState);
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setValidationError("");

    const formData = new FormData(event.currentTarget);
    const firstName = (formData.get("firstName") ?? "").toString();
    const lastName = (formData.get("lastName") ?? "").toString();
    const email = (formData.get("email") ?? "").toString();

    // Zod validation
    const validationResult = signupSchema.safeParse({
      firstName,
      lastName,
      email,
    });

    // if validation failed on the client, show error message and stop submission (do not submit to server)
    if (!validationResult.success) {
      setValidationError(
        validationResult.error.errors[0].message +
          " (Zod validation on client failed, not submitted to server)",
      );
      return;
    }

    // Client validation passed - show success message if flag is true
    if (SHOW_CLIENT_SIDE_VALIDATION_MESSAGE_FIRST) {
      setValidationError("Validation passed! (Zod validation on client)");
    }

    // Submit if validation passes - wrap in startTransition
    startTransition(() => {
      setValidationError(""); // Clear client message when server request starts
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
                <SubmitButton />

                <div className="signup-message-container">
                  {validationError && (
                    <div
                      className={`signup-message ${
                        validationError.includes("Validation passed!") ? "signup-success" : "signup-error"
                      }`}
                    >
                      <span
                        className={
                          validationError.includes("Validation passed!")
                            ? "signup-message-success-text"
                            : "signup-message-error-text"
                        }
                      >
                        {validationError}
                      </span>
                    </div>
                  )}

                  {state.message && !validationError && !isPending && (
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
