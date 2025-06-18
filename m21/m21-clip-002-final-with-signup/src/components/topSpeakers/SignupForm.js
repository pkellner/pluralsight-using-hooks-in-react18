import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setSubmitMessage('');

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(responseData.message);
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(responseData.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(previousFormData => ({
      ...previousFormData,
      [name]: value,
    }));
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
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="signup-input form-control"
                  placeholder="First Name"
                  required
                  disabled={isSubmitting}
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="signup-input form-control"
                  placeholder="Last Name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="signup-email-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="signup-input form-control"
                  placeholder="Email Address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="signup-submit-row">
                <button
                  type="submit"
                  className={`signup-submit-btn btn-accent`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="signup-spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>

                <div className="signup-message-container">
                  {submitStatus === 'success' && (
                    <div className="signup-message signup-success">
                      {submitMessage}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="signup-message signup-error">
                      {submitMessage}
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