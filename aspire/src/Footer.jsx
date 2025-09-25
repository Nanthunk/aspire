import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Aspire Real Estates. All Rights Reserved.</p>
        <p>
          Built with ❤ by Team Zugo. The Official Marketing Partner of Aspire Real Estates. 
        </p>

        {/* Social & Contact Icons */}
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/aspire.homes.95?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919626487589" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aspiresproperty@gmail.com">
            <MdEmail />
          </a>
          <a href="#enquire">
            <BiMessageDetail />
          </a>
          <a href="tel:+919626487589">
            <FaPhoneAlt />
          </a>
          <a
  href="https://www.google.com/maps/place/Aspire+Properties/@11.1629639,77.3106106,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba90562de65f8c5:0x451b8cd3c062a595!8m2!3d11.1629639!4d77.3131855!16s%2Fg%2F11x_n05ffk?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noreferrer"
>
  <FaMapMarkerAlt />
</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;