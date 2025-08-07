import { useState } from "react";
import { Box, Alert } from "@mui/material";
import "./contactMe.css";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Box
      sx={{
        width: "75vw",
        margin: "auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        fontFamily: "Omnes light",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 style={{
        marginBottom: '20px'
      }}>
        Contact Me
      </h1>
      <label className="contact-me-label">Name</label>
      <input className="contact-me-input" placeholder="Name" required></input>
      <label className="contact-me-label">e-mail</label>
      <input type="email" className="contact-me-input" placeholder="email" required></input>
      <label className="contact-me-label">Message</label>
      <input
        className="contact-me-input"
        placeholder="Message"
        required
      ></input>
      <button className="contact-me-send-btn" onClick={handleSubmit}>
        Send Message
      </button>

      {status === "success" && (
        <Alert severity="success">Message sent successfully!</Alert>
      )}
      {status === "error" && (
        <Alert severity="error">Failed to send message. Try again later.</Alert>
      )}
    </Box>
  );
}
