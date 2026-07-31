import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">

        {/* Contact Form */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

        {/* Contact Details */}

        <div className="contact-info">

  <p>
    <FaEnvelope className="contact-inline-icon" />
    <a href="mailto:ananyagupta315@gmail.com">
      ananyagupta315@gmail.com
    </a>
  </p>

  <p>
    <FaPhone className="contact-inline-icon" />
    <a href="tel:+916006623522">
      +91 6006623522
    </a>
  </p>

  <p>
    <FaMapMarkerAlt className="contact-inline-icon" />
    Dehradun, Uttarakhand, India
  </p>

</div>


      </div>

    </section>
  );
}

export default Contact;