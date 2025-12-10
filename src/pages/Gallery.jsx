import React, { useState } from "react";
import g1 from "../assets/gallery1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/gallery3.webp";
import g4 from "../assets/gallery4.webp";
import g5 from "../assets/securityguards.jpg";

const items = [
  { id: 1, img: g1 },
  { id: 2, img: g2 },
  { id: 3, img: g3 },
  { id: 4, img: g4 },
  { id: 5, img: g5 },
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <section className="subpage-hero gradient-bg">
        <div className="page-container subpage-hero-inner">
          <span className="section-pill">Our Gallery</span>
          <h1>
            Projects We&apos;re <span>Proud Of</span>
          </h1>
          <p>
            Explore our portfolio of successful installations across
            residential, commercial, and industrial properties.
          </p>
        </div>
      </section>

      <section className="section-white">
        <div className="page-container">
          <div className="gallery-grid">
            {filtered.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-image">
                  <img src={item.img} alt="Gallery" className="gallery-img" />
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-stats">
            <div className="stat-card">
              <h3>50+</h3>
              <p>Installations Completed</p>
            </div>
            <div className="stat-card">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
