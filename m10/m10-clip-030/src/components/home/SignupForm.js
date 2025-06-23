import { startTransition, useState } from "react";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    // Basic client-side validation
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setMessage("All fields are required");
      setIsSuccess(false);
      return;
    }

    // Submit to server
    startTransition(async () => {
      setIsPending(true);
      setMessage("");

      try {
        const formData = new URLSearchParams();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);

        const response = await fetch("http://localhost:3000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          setMessage(errorData.error);
          setIsSuccess(false);
        } else {
          const successData = await response.json();
          setMessage(successData.message);
          setIsSuccess(true);
          setFirstName("");
          setLastName("");
          setEmail("");
        }
      } catch (error) {
        setMessage("An error occurred during submission");
        setIsSuccess(false);
      } finally {
        setIsPending(false);
      }
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  type="text"
                  name="lastName"
                  className="signup-input form-control"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="signup-email-group">
                <input
                  type="email"
                  name="email"
                  className="signup-input form-control"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="signup-submit-row">
                <button type="submit" className="signup-submit-btn btn-accent" disabled={isPending}>
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
                  {message && !isPending && (
                    <div className={`signup-message ${isSuccess ? "signup-success" : "signup-error"}`}>
                      <span
                        className={isSuccess ? "signup-message-success-text" : "signup-message-error-text"}
                      >
                        {message}
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
