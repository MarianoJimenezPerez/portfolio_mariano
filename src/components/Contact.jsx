import React, { useRef, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  BsFillTelephoneOutboundFill,
} from "react-icons/all";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(false);
  const form = useRef();
  const adviceMessage = useRef();

  const hideAdvice = () => {
    setTimeout(() => {
      setAdvice("");
    }, 3000)
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_k5pa4uj",
        "template_09d6s7g",
        form.current,
        "2W_hs3ZUqeXg4NaPK"
      )
      .then((res) => {
        setAdvice(
          "Success. Thanks for contact, i will replay as soon as possible."
        );
        hideAdvice()
        e.target.reset();
      })
      .catch((error) => {
        setAdvice(
          "Failed. Something went wrong, please try another contact option or try again later."
        );
        hideAdvice()
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
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
            <a href="mailto:marianojimenezperez1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <h5>+54 9 351 3181399</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5493513181399"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsFillTelephoneOutboundFill />
            <h4>Call me</h4>
            <h5>Let's talk</h5>
            <a href="tel:+5493513181399" target="_blank">
              Talk now
            </a>
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
          <span className="contact__advice" ref={adviceMessage} style={error? {color: "#ff0000"} : {color: "#13FF00"}}>
            {advice && advice }
          </span>
          <button type="submit" className="btn btn__primary">
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
