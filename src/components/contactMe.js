import { useState } from "react";
import { Box, Alert } from "@mui/material";
import "./contactMe.css";
import emailjs from "emailjs-com";
import AnimateIn from "./animateIn";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success | error
  const [btnText, setBtnText] = useState("Send Message");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Sending Message...");

    emailjs
      .send("service_23m8zju", "template_gufea7j", form, "RtDFMiSi8GiZLqD4Z")
      .then(() => {
        setBtnText("Send Message");
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      })
      .catch((error) => {
        setBtnText("Send Message");
        setStatus("error");
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      });
  };

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "70px 20px 30px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        fontFamily: "Omnes light",
        backgroundColor: "black",
        color: "white",
        flex: "0.4",
      }}
    >
      <AnimateIn>
        <p style={{ marginBottom: "20px", fontSize: '7vh' }}>Contact Me</p>
        <p style={{ marginBottom: '20px', fontSize: 'large' }}>Have a <span style={{fontSize: 'x-large'}}>question?</span> or want to <span style={{fontSize: 'x-large'}}>work together?</span></p>
      </AnimateIn>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <label className="contact-me-label">Name</label>
        <input
          className="contact-me-input"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className="contact-me-label">E-mail</label>
        <input
          type="email"
          className="contact-me-input"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className="contact-me-label">Message</label>
        <input
          className="contact-me-input"
          placeholder="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="contact-me-send-btn" type="submit">
          {btnText}
        </button>
      </form>

      {status === "success" && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Message sent successfully!
        </Alert>
      )}
      {status === "error" && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Failed to send message. Try again later.
        </Alert>
      )}
    </Box>
  );
}
