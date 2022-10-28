import React, { useRef } from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xuydxbt",
      "template_e9k8ild",
      form.current,
      "6S69APr8GB0guLbu7"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FiMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ch.shalu13@gmail.com</h5>
            <a
              href="mailto:ch.shalu13@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>idyllicshalu</h5>
            <a
              href="https://ig.me/m/idyllicshalu"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918800907825</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918800907825"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
