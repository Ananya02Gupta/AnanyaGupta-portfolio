import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Button Clicked");
  console.log(formData);

  setLoading(true);

    try {
      const response = await fetch(
        "https://ananyagupta-portfolio.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Status:", response.status);
console.log("URL:", response.url);

const data = await response.json();
console.log("Response:", data);

      if (data.success) {
        alert("✅ Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
  console.error("Error:", error);
  alert("❌ Something went wrong!");
}

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

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