import { useState, useRef } from "react";

export default function SimpleNameForm2() {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setIsSuccess(false);

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
    }
  }

  return (
    <div>
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
      {message && (
        <>
          <br />
          <div style={{ color: isSuccess ? "green" : "red" }}>{message}</div>
        </>
      )}
    </div>
  );
}
