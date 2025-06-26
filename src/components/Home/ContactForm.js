import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import contactImage from "../../Assets/contact.png";

function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSent(true);
          setError("");
          form.current.reset();
        },
        (error) => {
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="left-section">
          <h2>Contact Me</h2>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message
            </button>

            {isSent && (
              <p className="success-msg">Message sent successfully!</p>
            )}
            {error && <p className="error-msg">{error}</p>}
          </form>
        </div>

        <div className="right-section">
          <img src={contactImage} alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
