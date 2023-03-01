import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3z9wu4x", "template_ny22era", form.current, "I0fEVFnrdn8qmuBwb").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>4ndr125@gamil.com</h5>
            <a href="mailto:a8461565@gamil.com" target="_">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>4ndr125</h5>
            <a href="https://web.facebook.com/profile.php?id=100083123975486" target="_">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6281249192305</h5>
            <a href="https://api.whatsapp.com/send?phone+6281249192305" target="_">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" id="name" name="name" placeholder="Your Full Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
