import React from "react";
import Expert1 from "../assets/anoop-image.jpeg";
import Expert2 from "../assets/nikhil-image.jpeg";
import StoryImage from "../assets/about-cover.png";

export default function About() {
  return (
    <>
      {/* Top purple hero */}
      <section className="subpage-hero gradient-bg">
        <div className="page-container subpage-hero-inner">
          <span className="section-pill">About Us</span>
          <h1>
            Where Excellence Meets <br />
            <span>Protecting Communities</span>
          </h1>
          <p>
            We&apos;re more than a security company – we&apos;re your partners
            in protection, committed to keeping what matters most safe.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-white">
        <div className="page-container about-layout">
          <div className="about-text-block">
            <span className="section-pill">Our Story</span>
            <h2>
              From Humble Beginnings to <br />
              Industry Leaders
            </h2>
            <p>
              B.V.M Security Services was founded with a simple mission:
              to provide top-tier security solutions that everyone can afford.
              What started as a small team of three passionate security experts
              has grown into a leading provider serving thousands of homes and
              businesses.
            </p>
            <p>
              Our founder, Anoop Singh, recognized that quality security
              shouldn&apos;t be a luxury. With decades of combined experience in
              law enforcement and technology, our team developed innovative
              approaches to make advanced security accessible.
            </p>
            <p>
              Today, we continue to push boundaries with smart integrations,
              personalized solutions that adapt to our clients&apos; evolving
              needs.
            </p>

            <div className="hero-stats about-stats">
              <div>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>99%</h3>
                <p>Client Retention</p>
              </div>
              <div>
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src={StoryImage}
              alt="BVM Security Poster"
              className="about-story-img"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-bg">
        <div className="page-container">
          <div className="section-header">
            <span className="section-pill">Our Values</span>
            <h2>What Drives Us Forward</h2>
          </div>

          <div className="card-grid four">
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>We operate with complete transparency and honesty.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every installation.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👁️</div>
              <h3>Vigilance</h3>
              <p>We stay ahead of threats with cutting-edge tech.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Customer First</h3>
              <p>Your safety and satisfaction are at the heart of all we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="experts-section section-white">
        <div className="page-container">
          <div className="section-header">
            <span className="section-pill">Meet Our Experts</span>
            <h2>
              The People <span>Behind B.V.M</span>
            </h2>
            <p>
              Our experienced professionals ensure seamless service and
              unmatched dedication.
            </p>
          </div>

          <div className="experts-grid">
            <div className="expert-card">
              <img src={Expert1} alt="Expert 1" className="expert-img" />
              <h3>Mr. Anoop Singh</h3>
              <p>Founder</p>
            </div>

            <div className="expert-card">
              <img
                src={Expert2}
                alt="Expert 2"
                className="expert-img expert-img-right"
              />
              <h3>Mr. Nikhil Pratap Singh</h3>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
