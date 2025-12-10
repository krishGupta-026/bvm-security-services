import React from "react";

export default function Contact() {
  return (
    <>
      <section className="subpage-hero gradient-bg">
        <div className="page-container subpage-hero-inner">
          <span className="section-pill">Contact Us</span>
          <h1>
            Get in Touch <span>With Us</span>
          </h1>
          <p>
            Ready to enhance your security? Contact us for a free consultation
            and personalized assessment.
          </p>
        </div>
      </section>

      <section className="section-white">
        <div className="page-container contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Ground Floor, Shop no. 1, S.T.B Chowk, Sneh Vihar,</p>
            <p>Sohna Road, Bhondsi, Gurugram - 122001</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>+91 8851481867</p>
            <p>+91 9990681775</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Us</h3>
            <p>bvm70311@gmail.com</p>
          </div>

        </div>
      </section>
    </>
  );
}
