import { useState, useRef } from "react";

export default function SimpleNameForm3() {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formRef.current.reportValidity()) {
      return; // Stop if validation fails
    }

    setMessage("");
    setIsSuccess(false);
    setSubmitting(true);

    try {
      // Create URLSearchParams for classic form POST encoding
      const formData = new URLSearchParams();
      formData.append("firstName", firstNameRef.current.value || "");
      formData.append("lastName", lastNameRef.current.value || "");
      formData.append("email", emailRef.current.value || "");

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
      }
    } catch (err) {
      setMessage("Network error occurred");
      setIsSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form ref={formRef}>
      <input type="text" name="firstName" placeholder="First Name" required ref={firstNameRef} />
      <br />
      <br />
      <input type="text" name="lastName" placeholder="Last Name" required ref={lastNameRef} />
      <br />
      <br />
      <input type="email" name="email" placeholder="Email" ref={emailRef} required />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {submitting && <span style={{ color: "#1E90FF", fontStyle: "italic", marginLeft: "10px" }}>submitting...</span>}
      {message && (
        <>
          <br />
          <div style={{ color: isSuccess ? "green" : "red" }}>{message}</div>
        </>
      )}
    </form>
  );
}
