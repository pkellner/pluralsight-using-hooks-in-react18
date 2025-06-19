import { useActionState } from "react";
import { signupAction } from "./action/SimpleNameAction";

export default function SimpleNameForm4() {
  const [state, formAction, isPending] = useActionState(signupAction, {
    message: "",
    isSuccess: false,
    submitting: false,
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <form action={formAction} key={state.isSuccess ? Date.now() : "form"}>
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
        defaultValue={state.email} // ← changed
      />
      <br />
      <br />

      <button type="submit">Submit</button>
      {isPending && <span style={{ marginLeft: 10, fontStyle: "italic" }}>submitting…</span>}
      {state.message && (
        <>
          <br />
          <div style={{ color: state.isSuccess ? "green" : "red" }}>{state.message}</div>
        </>
      )}
    </form>
  );
}
