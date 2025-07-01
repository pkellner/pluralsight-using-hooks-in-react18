import { startTransition, useActionState, useState } from "react";
import { serverSignupAction } from "./serverSignupAction";
import SubmitButton from "./SubmitButton";
import { signupSchema, initialSignupState } from "./signupSchema";


export default function SignupForm() {
  const [state, formAction, isPending] =
    useActionState(serverSignupAction, initialSignupState);
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    
    const data = Object.fromEntries(formData);
    const validationResult = signupSchema.safeParse(data);

    if (!validationResult.success) {
      setValidationError(
        validationResult.error.errors[0].message +
        " (client validation error)"
      );
      return;
    }
    

    setValidationError("");

    startTransition(() => {
      formAction(formData);
    });
  }
  console.log("validationError", validationError);
  const displayMessage = validationError
    ? { text: validationError, isSuccess: false }
    : state.message && !isPending
      ? { text: state.message, isSuccess: state.isSuccess }
      : null;

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-card card">
          <div className="card-body">
            <h3 className="signup-title">Stay Informed</h3>
            <form
              onSubmit={handleSubmit}
              className="signup-form"
              key={`form-${state.message}-${state.isSuccess}`}
            >
              <div className="signup-form-row">
                <input
                  defaultValue={state.firstName}
                  type="text"
                  name="firstName"
                  className="signup-input form-control"
                  placeholder="First Name"
                  required
                />

                <input
                  defaultValue={state.lastName}
                  type="text"
                  name="lastName"
                  className="signup-input form-control"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="signup-email-group">
                <input
                  defaultValue={state.email}
                  type="email"
                  name="email"
                  className="signup-input form-control"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="signup-submit-row">
                <SubmitButton />

                <div className="signup-message-container">
                  {displayMessage && !isPending && (
                    <div
                      className={`signup-message ${
                        displayMessage.isSuccess
                          ? "signup-success signup-message-success-text"
                          : "signup-error signup-message-error-text"
                      }`}
                    >
                      {displayMessage.text}
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
