// src/pages/Contact.jsx
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a success message
    console.log("Message sent:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
        Have questions or feedback? Fill out the form below and we’ll get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "1.5rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: "600" }}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "0.5rem"
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: "600" }}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "0.5rem"
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: "600" }}>Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "0.5rem"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            fontWeight: "600",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: "1rem", color: "green", fontWeight: "600" }}>
          ✅ Your message has been sent!
        </p>
      )}
    </div>
  );
}

export default Contact;
