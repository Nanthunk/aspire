import React from "react";
import "./Home.css";
import img from "./assets/aspnew.jpg";
import ContactForm from "./ContactForm";
import Amenities from "./Amenities";
import blueprint from "./assets/blueprint.webp";
import { FaMapMarkedAlt, FaWalking, FaTree, FaHome, FaChartLine } from "react-icons/fa";
import FloatingBar from "./FloatingButton";
import Footer from "./Footer";
import Carousel from "./Carousel";




function Home() {
  return (
    <div className="home">
      <img src={img} alt="Sample" className="home-image" />

      <ContactForm />
      <FloatingBar />

       {/* Form Section with Background */}
      {/* <div className="form-section">
       <form
  action="https://formspree.io/f/xblawjga"
  method="POST"
  className="user-form"
  >
  <h2>Contact Us</h2>
  <input type="text" name="name" placeholder="Enter your name" required />
  <input type="tel" name="phone" placeholder="Enter your phone number" required />
  <input type="email" name="email" placeholder="Enter your email" required />
  <button type="submit">Submit</button>
</form>

      </div> */}

       <div className="overview">
        <center>
        <h1>Overview</h1>
        <p><b>ASPIRES, the perfect plotted community for your dream home. Located in the heart of Tiruppur city in Thirumuruganpoondi, project comprises just 24 plots, offering you more privacy and exclusivity. With plenty of educational institutions, healthcare facilities, and entertainment options in the vicinity, this location has all the ingredients for growth and appreciation value in the future. And the best part? The plots are surprisingly affordable!</b></p>
        </center>

       </div>

       <div className="highlights">
        <h3>BUILD YOUR DREAM HOME IN THE LAND OF PROSPERITY!</h3>
        <h1><span>10+</span> Amenities</h1>
        <h1><span>20+</span> Luxury Plots</h1>
        <h1><span>1.23</span> Acres of Lands</h1>
       </div>

         <Amenities />

         {/* <div className="lifestyle">
            <h1>The extraordinary lifestyle</h1>
            <p>Every feature in Aspire Real estate is placed with purpose to enhance your lifestyle around the lake</p>

         </div> */}

         <div className="reasons">
      <h2>KEY REASONS TO BUY</h2>
      <div className="reasons-container">
        <div className="reason-card">
          <FaMapMarkedAlt className="reason-icon" />
          <p>The only plotted development inside the Tiruppur city</p>
        </div>

        <div className="reason-card">
          <FaTree className="reason-icon" />
          <p>Exclusive premium plotted community with just 24 plots</p>
        </div>

        <div className="reason-card">
          <FaWalking className="reason-icon" />
          <p>Surrounded by established Schools, Colleges, Medical Facilities and Industries</p>
        </div>

        <div className="reason-card">
          <FaHome className="reason-icon" />
          <p>Value for Money with legal approval</p>
        </div>

        <div className="reason-card">
          <FaChartLine className="reason-icon" />
          <p>Attractively priced hence maximum appreciation</p>
        </div>
      </div>
    </div>

         {/* <div className="blueprint">
          <center>
          <h1>Perspective Planning</h1>
          <img src={blueprint} alt="blueprint" />
          </center>
         </div> */}
          <Carousel />

         <div className="points">

          <h1>Why Choose Us...!</h1>
          <ul>
            <li>Just 2 kms from <b>Tiruppur's TIDEL PARK</b></li>
            <li>Surrounded by <b>CASAGRAND & D-MART</b></li>
            <li>Spacious Layout with Modern Amenities</li>
            <li>Plots with Affordable Price </li>
          </ul>

         </div>

        <div className="location-section">
  <h1 className="location-title">LOCATION</h1>
  <div className="location-content">
  {/* Map on top */}
  <div className="map-container">
    <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.28794969257!2d77.3131855!3d11.1629639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90562de65f8c5%3A0x451b8cd3c062a595!2sAspire%20Properties!5e0!3m2!1sen!2sin!4v1694972200000!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>

<div>

<a
    href="https://www.google.com/maps/place/Aspire+Properties/@11.1629639,77.3106106,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba90562de65f8c5:0x451b8cd3c062a595!8m2!3d11.1629639!4d77.3131855!16s%2Fg%2F11x_n05ffk?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
    rel="noopener noreferrer"
    style={{ display: "block", marginTop: "20px", color: "white", textDecoration: "underline", fontFamily: "Arial, sans-serif" }}
  >
   <b> 📍Click here to Know the Direction of Our Location.</b>
  </a>

  </div>

  

  
    
    <div className="location-advantages">
      <h2>LOCATION ADVANTAGES</h2>

      <div className="advantages-grid">
        {/* Left Column */}
        <div className="advantages-column">
          <h3>CONNECTIVITY</h3>
          <ul>
            <li>
              <span>Thirumuruganpoondi Temple</span> <span>1 min</span>
            </li>
            <li>
              <span>Thirumuruganpoondi Bus Stop</span> <span>2 mins</span>
            </li>
            <li>
              <span>Avinashi</span> <span>10 mins</span>
            </li>
          </ul>

          <h3>EDUCATIONAL INSTITUTIONS</h3>
          <ul>
            <li>
              <span>AVP Trust National Matric School</span> <span>3 mins</span>
            </li>
            <li>
              <span>AVP College Arts</span> <span>3 mins</span>
            </li>
            <li>
              <span>AKR Academy School CBSE</span> <span>5 mins</span>
            </li>
            <li>
              <span>M.G.V. Global Academy School</span> <span>7 mins</span>
            </li>
            <li>
              <span>T.E.A. Public School</span> <span>8 mins</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="advantages-column">
          <h3>HOSPITALS</h3>
          <ul>
            <li>
              <span>CNS Hospital</span> <span>5 mins</span>
            </li>
            <li>
              <span>Sree Saran Medical Centre</span> <span>10 mins</span>
            </li>
            <li>
              <span>Revathi Medical Center</span> <span>15 mins</span>
            </li>
          </ul>

          <h3>ENTERTAINMENT</h3>
          <ul>
            <li>
              <span>Poondi Temple Park</span> <span>1 min</span>
            </li>
            <li>
              <span>D Mart</span> <span>3 mins</span>
            </li>
            <li>
              <span>Lingam Theatre</span> <span>4 mins</span>
            </li>
          </ul>
        </div>
      </div>
    </div>


</div>

</div>

          <Footer />
   
    
         

    </div>  

  );
}

export default Home;
