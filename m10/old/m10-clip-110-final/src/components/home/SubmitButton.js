import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="signup-submit-btn btn-accent">
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
