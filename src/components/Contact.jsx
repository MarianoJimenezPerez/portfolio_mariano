import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5pa4uj",
        "template_09d6s7g",
        form.current,
        "2W_hs3ZUqeXg4NaPK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <h5>Get in touch</h5>
      <h3>Contact me</h3>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>marianojimenezperez1@gmail.com</h5>
            <a href="mailto:marianojimenezperez1@gmail.com"></a>
          </article>
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>marianojimenezperez1@gmail.com</h5>
            <a href="mailto:marianojimenezperez1@gmail.com"></a>
          </article>
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>marianojimenezperez1@gmail.com</h5>
            <a href="mailto:marianojimenezperez1@gmail.com"></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="text" name="subjet" placeholder="Subject" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn__primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
