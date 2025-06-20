import { startTransition, useActionState, useState } from "react";
import { signupAction } from "./action/SimpleNameActionWithZod";
import { initialSignupState, signupSchema } from "./signupSchema";

const SHOW_CLIENT_SIDE_VALIDATION_MESSAGE_FIRST = false;

export default function SimpleNameForm5() {
  const [state, formAction, isPending] = useActionState(
    signupAction,
    initialSignupState,
  );
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        defaultValue={state.firstName}
      />
      <br />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        defaultValue={state.lastName}
      />
      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        defaultValue={state.email}
      />
      <br />
      <br />

      <button type="submit">Submit</button>
      {isPending && (
        <span style={{ marginLeft: 10, fontStyle: "italic" }}>
          submitting…
        </span>
      )}

      {validationError && (
        <>
          <br />
          <div
            style={{
              color: validationError.includes("Validation passed!")
                ? "blue"
                : "red",
            }}
          >
            {validationError}
          </div>
        </>
      )}

      {state.message && !validationError && !isPending && (
        <>
          <br />
          <div style={{ color: state.isSuccess ? "green" : "red" }}>
            {state.message}
          </div>
        </>
      )}
    </form>
  );
}
