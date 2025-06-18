import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signupAction } from "./action/SignupFormAction";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="signup-submit-btn btn-accent"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="signup-spinner"></div>
          Submitting...
        </>
      ) : (
        "Submit"
      )}
    </button>
  );
}

export default function SignupForm() {
  const [state, formAction] = useActionState(signupAction, {
    success: false,
    error: null,
    message: "",
    formData: { firstName: "", lastName: "", email: "" },
  });

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-card card">
          <div className="card-body">
            <h3 className="signup-title">Stay Informed</h3>

            <form action={formAction} className="signup-form">
              <div className="signup-form-row">
                <input
                  type="text"
                  name="firstName"
                  defaultValue={state.formData?.firstName || ""}
                  className="signup-input form-control"
                  placeholder="First Name"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  defaultValue={state.formData?.lastName || ""}
                  className="signup-input form-control"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="signup-email-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={state.formData?.email || ""}
                  className="signup-input form-control"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="signup-submit-row">
                <SubmitButton />

                <div className="signup-message-container">
                  {state.success && state.message && (
                    <div className="signup-message signup-success">
                      {state.message}
                    </div>
                  )}

                  {!state.success && state.error && (
                    <div className="signup-message signup-error">
                      {state.error}
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
