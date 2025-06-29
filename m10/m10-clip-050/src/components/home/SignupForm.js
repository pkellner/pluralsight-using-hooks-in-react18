import { useActionState, startTransition } from "react";
import { restSignupAction } from "./restSignupAction";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(restSignupAction, {
    firstName: "",
    lastName: "",
    email: "",
    isSuccess: false,
    message: "",
  });

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
                        state.isSuccess
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
