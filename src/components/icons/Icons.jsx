import React from "react";

/* ------------------------------
   HERO / BRAND ICONS
--------------------------------*/

/* Main Shield Logo (center diamond) */
export const ShieldLogoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="icon-svg hero-main-shield"   // 👈 add this extra class
  >
    <path
      d="M12 3L5 6v6c0 4.4 3.1 8.4 7 9 3.9-.6 7-4.6 7-9V6l-7-3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


/* Camera (floating icon top-left) */
export const HeroCameraIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect
      x="3.5"
      y="6.5"
      width="17"
      height="11"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <circle
      cx="12"
      cy="12"
      r="3.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

/* Lock (floating icon top-right) */
export const HeroLockIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect
      x="6"
      y="10"
      width="12"
      height="9"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M9 10V8a3 3 0 0 1 6 0v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

/* Eye (floating icon bottom) */
export const HeroEyeIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <path
      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="2.3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

/* ------------------------------
   SERVICE CARD ICONS
--------------------------------*/

/* CCTV Installation */
export const ServiceCctvIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect
      x="2.5"
      y="6"
      width="14"
      height="9"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M16.5 9l4 1.5v3l-4 1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Surveillance Systems */
export const ServiceSurveillanceIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <circle
      cx="12"
      cy="12"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

/* Home Security */
export const ServiceHomeIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <path
      d="M3 11l9-7 9 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="7"
      y="11"
      width="10"
      height="9"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

/* Commercial Security */
export const ServiceCommercialIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect
      x="3"
      y="10"
      width="6"
      height="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <rect
      x="10"
      y="6"
      width="6"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <rect
      x="17"
      y="12"
      width="4"
      height="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

/* ------------------------------
   WHY CHOOSE US ICONS
--------------------------------*/

export const WhyCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 12l3 3 5-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const WhyClockIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 8v4l3 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const WhyStarIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <path
      d="M12 3l2.5 6h6l-5 4 2 6-5.5-3.5L6.5 19l2-6-5-4h6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const WhyTechnicianIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <circle
      cx="12"
      cy="7"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 21v-2a6 6 0 0 1 14 0v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const WhyChatIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 11h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 14h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const WhyBoltIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <path
      d="M13 2L6 14h6l-1 8 7-12h-6l1-8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
