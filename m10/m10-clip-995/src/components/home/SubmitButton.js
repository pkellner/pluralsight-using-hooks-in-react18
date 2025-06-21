import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="signup-submit-btn btn-accent" disabled={pending}>
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