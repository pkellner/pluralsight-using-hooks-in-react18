

export default function SubmitButton() {

  return (
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
  );
}