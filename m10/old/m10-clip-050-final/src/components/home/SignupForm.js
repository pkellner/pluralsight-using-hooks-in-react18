import { startTransition, useActionState } from "react";
import { restSignupAction } from "./restSignupAction";

export default function SignupForm() {
  const initialSignupState = {
    firstName: "",
    lastName: "",
    email: "",
    isSuccess: false,
    message: "",
  };
  const [state, formAction, isPending] = useActionState(restSignupAction, initialSignupState);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-card card">
          <div className="card-body">
            <h3 className="signup-title">Stay Informed</h3>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-form-row">
                <input
                  type="text"
                  name="firstName"
                  className="signup-input form-control"
                  placeholder="First Name"
                  defaultValue={state.firstName}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  className="signup-input form-control"
                  placeholder="Last Name"
                  defaultValue={state.lastName}
                  required
                />
              </div>

              <div className="signup-email-group">
                <input
                  type="email"
                  name="email"
                  className="signup-input form-control"
                  placeholder="Email Address"
                  defaultValue={state.email}
                  required
                />
              </div>

              <div className="signup-submit-row">
                <button type="submit" disabled={isPending} className="signup-submit-btn btn-accent">
                  {isPending ? (
                    <>
                      <div className="signup-spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <div className="signup-message-container">
                  {state.message && !isPending && (
                    <div
                      className={`signup-message ${
                        isSuccess
                          ? "signup-success signup-message-success-text"
                          : "signup-error signup-message-error-text"
                      }`}
                    >
                      {state.message}
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
