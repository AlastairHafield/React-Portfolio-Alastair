import { useState } from "react";
import { validateEmail } from "./utils/helpers.js";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Fill out name and email address");
      return;
    }

    setShowMessage(true);
    setFormState({ name: "", email: "", message: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    let error = "";

    if (name === "email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        error = "Your email is invalid.";
      }
    } else {
      if (!value.trim()) {
        error = `${name} is required.`;
      }
    }

    setErrorMessage(error);
    setFormState({ ...formState, [name]: value });
  }

  return (
    <section className="container">
      {showMessage ? (
        <div>
          <p>Thank you for your message!</p>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit}>
          <h1>Contact me</h1>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div>
            <label>Email address:</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}
