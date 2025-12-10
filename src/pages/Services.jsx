import React from "react";
import GuardImage from "../assets/security.jpeg";
import HousekeepingImage from "../assets/housekeeping.png";
import PsoImage from "../assets/pso.png";
import BouncerImage from "../assets/bouncer.png";

function ServiceBlock({ label, title, icon, bullets, image }) {
  return (
    <div className="service-row">
      {/* LEFT: text */}
      <div className="service-row-left">
        <span className="section-pill small-pill">{label}</span>
        <h3>{title}</h3>

        <div className="service-bullets">
          {bullets.map((item, idx) => (
            <div className="bullet-item" key={idx}>
              <span className="bullet-icon">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: image (or icon fallback) */}
      <div className="service-row-right">
        {image ? (
          <img src={image} alt={title} className="service-side-img" />
        ) : (
          <div className="service-floating-icon">{icon}</div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="subpage-hero gradient-bg">
        <div className="page-container subpage-hero-inner">
          <span className="section-pill">Our Services</span>
          <h1>
            Complete Security <br />
            <span>Solutions</span>
          </h1>
          <p>
            From residential to commercial, we offer comprehensive security
            services tailored to your unique needs and budget.
          </p>
        </div>
      </section>

      <section className="section-white">
        <div className="page-container services-rows">
          <ServiceBlock
            label="Security Guards"
            title="Security Guards"
            icon="📷"
            image={GuardImage}
            bullets={[
              "Patrolling & Surveillance",
              "24/7 Protection",
              "Trained & Licensed Guards",
              "Theft & Trespass Prevention",
              "Emergency Response Ready",
              "Visitor & Crowd Management",
            ]}
          />

          <ServiceBlock
            label="House Keeping"
            title="House Keeping"
            icon="📡"
            image={HousekeepingImage}
            bullets={[
              "Trained Housekeeping Staff",
              "Daily Cleaning & Upkeep",
              "Deep Cleaning Services",
              "Sanitization & Hygiene",
              "Restroom Cleaning",
              "Floor & Surface Care",
            ]}
          />

          <ServiceBlock
            label="Personal Security Officer"
            title="Personal Security Officer"
            icon="🏠"
            image={PsoImage}
            bullets={[
              "Highly Trained Protection Officers",
              "VIP, Executive & High-Profile Security",
              "Secure Travel Protection",
              "Professional & Confidential",
              "Access Control & Perimeter Security",
              "24/7 Availability",
            ]}
          />

          <ServiceBlock
            label="Bouncer Security"
            title="Bouncer Security"
            icon="🏢"
            image={BouncerImage}
            bullets={[
              "Strong & Trained Personnels",
              "Crowd Control & Management",
              "Entry & Identity Verification",
              "VIP Escort & Protection",
              "Dispute Handling",
              "Emergency Response Trained",
            ]}
          />
        </div>
      </section>
    </>
  );
}
