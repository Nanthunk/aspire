// import React, { useState } from "react";
// import "./Amenities.css";
// import ame1 from "./assets/ame1.jpg";
// import ame2 from "./assets/ame2.jpeg";
// import ame3 from "./assets/ame3.jpeg";
// import ame4 from "./assets/ame4.jpeg";
// import ame5 from "./assets/ame5.jpeg";
// import ame6 from "./assets/ame8.jpeg";

// function Amenities() {
//   const [showAll, setShowAll] = useState(false);

//   const images = [ame1, ame2, ame3, ame4, ame5, ame6];

//   return (
//     <div className="amenities">
//       <h1>Amenities</h1>

//       <div className="amenities-grid">
//         {(showAll ? images : images.slice(0, 3)).map((img, index) => (
//           <img key={index} src={img} alt={`amenity-${index}`} />
//         ))}
//       </div>

//       {!showAll && (
//         <button className="load-btn" onClick={() => setShowAll(true)}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// }

// export default Amenities;


import React from "react";
import "./Amenities.css";
import ame1 from "./assets/ame1.jpg";
import ame2 from "./assets/ame2.jpeg";
import ame3 from "./assets/ame3.jpeg";
import ame4 from "./assets/ame4.jpeg";
import ame5 from "./assets/ame5.jpeg";
import ame6 from "./assets/ame8.jpeg";

function Amenities() {
  const amenities = [
    { img: ame1, name: "24/7 Water Facilities" },
    { img: ame3, name: "Street Light" },
    { img: ame2, name: "CCTV Security " },
    { img: ame5, name: "Car Parking" },
    { img: ame4, name: "Road Facility" },
    { img: ame6, name: "Gardens" },
    
  ];

  return (
    <div className="amenities">
      <h1><b>Our Amenities</b></h1>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
