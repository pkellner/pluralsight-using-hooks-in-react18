import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitStatus('error');
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
            <p className="signup-description">
              Get the latest updates on speakers, sessions, and conference news delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-form-row">
                <div className="signup-form-group">
                  <label htmlFor="firstName" className="signup-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="signup-input form-control"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="signup-form-group">
                  <label htmlFor="lastName" className="signup-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="signup-input form-control"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="signup-form-group signup-email-group">
                <label htmlFor="email" className="signup-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="signup-input form-control"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="signup-submit-group">
                <button
                  type="submit"
                  className={`signup-submit-btn btn-accent ${isSubmitting ? 'spinner-bottom' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border" role="status" aria-hidden="true"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="signup-message signup-success">
                  Thank you! You have been successfully signed up for updates.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="signup-message signup-error">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}