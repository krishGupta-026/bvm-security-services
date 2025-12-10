import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldLogoIcon,
  HeroCameraIcon,
  HeroLockIcon,
  HeroEyeIcon,
  ServiceCctvIcon,
  ServiceSurveillanceIcon,
  ServiceHomeIcon,
  ServiceCommercialIcon,
  WhyCheckIcon,
  WhyClockIcon,
  WhyStarIcon,
  WhyTechnicianIcon,
  WhyChatIcon,
  WhyBoltIcon,
} from "../components/icons/Icons";
import WhyImage from "../assets/why-choose.jpg";

function HeroSection() {
  return (
    <section className="hero-section gradient-bg">
      <div className="page-container hero-layout">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            24/7 Security Monitoring
          </div>
          <h1 className="hero-title">
            Protect What <br /> <span className="hero-light">Matters Most</span>
          </h1>
          <p className="hero-subtitle">
            Advanced security solutions tailored for your home and business.
            From state-of-the-art Security Guards to comprehensive surveillance,
            we&apos;ve got you covered.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
            <Link to="/services" className="btn btn-ghost">
              <span className="play-icon">▶</span> Our Services
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-diamond">
            <span className="hero-shield">
              <ShieldLogoIcon />
            </span>
          </div>

          <div className="floating-icon icon-top-left">
            <HeroCameraIcon />
          </div>
          <div className="floating-icon icon-top-right">
            <HeroLockIcon />
          </div>
          <div className="floating-icon icon-bottom">
            <HeroEyeIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeServicesPreview() {
  return (
    <section className="section-bg">
      <div className="page-container">
        <div className="section-header">
          <span className="section-pill">Our Services</span>
          <h2>
            Comprehensive Security <span>Solutions</span>
          </h2>
          <p>
            From residential to commercial, we provide end-to-end security
            solutions tailored to your specific needs.
          </p>
        </div>

        <div className="card-grid four">
          <div className="service-card">
            <div className="service-icon">
              <ServiceCctvIcon />
            </div>
            <h3>Security Guards</h3>
            <p>
              Highly trained and fully verified security guards ensuring 24×7
              protection for residential, commercial, and industrial premises.
              Reliable, disciplined, and quick to respond in any situation.
            </p>
            
          </div>

          <div className="service-card">
            <div className="service-icon">
              <ServiceSurveillanceIcon />
            </div>
            <h3>House Keeping</h3>
            <p>
              Professional housekeeping services ensuring spotless, hygienic,
              and well-maintained spaces. Reliable staff trained in modern
              cleaning methods and customer care.
            </p>
            
          </div>

          <div className="service-card service-card-highlight">
            <div className="service-icon">
              <ServiceHomeIcon />
            </div>
            <h3>PSO</h3>
            <p>
              Highly trained Personal Security Officers ensuring close
              protection, threat prevention, and complete safety for individuals
              at all times.
            </p>
            
          </div>

          <div className="service-card">
            <div className="service-icon">
              <ServiceCommercialIcon />
            </div>
            <h3>Bouncer Security</h3>
            <p>
              Highly trained bouncers ensuring safety, discipline, and smooth
              management at events, clubs, and venues.
            </p>
            
          </div>
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section-white">
      <div className="page-container why-layout">
        <div className="why-image">
          <img src={WhyImage} alt="BVM Security Services" />
        </div>

        <div className="why-content">
          <span className="section-pill">Why Choose Us</span>
          <h2>
            Your Security is Our <span>Priority</span>
          </h2>
          <p>
            With over 15 years of experience in the security industry,
            we&apos;ve built a reputation for excellence, reliability, and
            customer satisfaction.
          </p>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <WhyCheckIcon />
              </div>
              <div>
                <h4>Licensed &amp; Certified</h4>
                <p>Security professionals with industry certifications.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <WhyClockIcon />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock monitoring and customer support.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <WhyStarIcon />
              </div>
              <div>
                <h4>Premium Quality</h4>
                <p>Only the best equipment from trusted manufacturers.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <WhyTechnicianIcon />
              </div>
              <div>
                <h4>Expert Team</h4>
                <p>Highly trained technicians with years of experience.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <WhyChatIcon />
              </div>
              <div>
                <h4>Free Consultation</h4>
                <p>Personalized assessments at no cost to you.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <WhyBoltIcon />
              </div>
              <div>
                <h4>Fast Installation</h4>
                <p>Quick and efficient setup with minimal disruption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeServicesPreview />
      <WhyChooseUs />
    </>
  );
}
