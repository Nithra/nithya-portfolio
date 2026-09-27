import "./../../public/css/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <h5>GET IN TOUCH</h5>
          <h2>Let's Work Together</h2>

          <p>
            I'm currently available for full-time UI Developer, React Developer,
            Frontend Developer opportunities and freelance web development
            projects. Feel free to reach out!
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:nithyarajainfotech@gmail.com">
                 nithyarajainfotech@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+918667235236">
                  +91 8667235236
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Madurai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

          {/* Right */}

         <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-form"
>

  <input
    type="hidden"
    name="access_key"
    value="YOUR_ACCESS_KEY"
  />

  <input
    type="hidden"
    name="subject"
    value="New Portfolio Contact"
  />

  <input
    type="hidden"
    name="from_name"
    value="Nithya Portfolio"
  />

  <div className="form-group">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />
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
      name="company"
      placeholder="Company (Optional)"
    />
  </div>

  <div className="form-group">
    <textarea
      name="message"
      rows="6"
      placeholder="Your Message"
      required
    ></textarea>
  </div>

  <button type="submit">
    <FaPaperPlane />
    Send Message
  </button>

</form>
        </div>

      </div>
    </section>
  );
};

export default Contact;