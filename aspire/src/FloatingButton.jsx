import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaComments, FaInfoCircle } from "react-icons/fa";
import "./FloatingButton.css";

function FloatingBar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer"); // target the footer

    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHide(true);  // hide bar when footer is visible
        } else {
          setHide(false); // show bar otherwise
        }
      },
      { threshold: 0.1 } // triggers when 10% of footer is visible
    );

    observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
  <div className={`floating-bar ${hide ? "hidden" : ""}`}>
    <a href="tel:+919626487589" className="bar-item call">
      <FaPhoneAlt /> Call
    </a>

    <a
      href="https://wa.me/919626487589"
      target="_blank"
      rel="noopener noreferrer"
      className="bar-item whatsapp"
    >
      <FaWhatsapp /> WhatsApp
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=aspiresproperty@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bar-item email"
    >
      <FaComments /> Email
    </a>

    <a href="#enquire" className="bar-item enquire">
      <FaInfoCircle /> Enquire
    </a>
  </div>
);
}

export default FloatingBar;