// import { Link } from "react-router-dom";
// import image from "../assets/aboutbg.jpg"; // replace with your image path

// const AboutPromoSection = () => {
//   return (
//     <div
//       className="bg-fixed bg-center bg-cover h-96 relative"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Nirmal Farm</h2>
//         <p className="text-lg md:text-xl text-gray-600 mb-6">Know the story behind our green paradise</p>
//         <Link to="/about" className="bg-green-900 px-6 py-3 rounded text-white font-semibold hover:bg-green-800 transition">
//           ABOUT US
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AboutPromoSection;


import { Link } from "react-router-dom";
import image from "../assets/aboutbg.jpg"; // replace with your image path

const AboutPromoSection = () => {
  return (
    <div className="about-promo-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="about-promo-overlay">
        <div className="about-promo-content">
          <h2 className="about-promo-title">Discover Nirmal Farm</h2>
          <p className="about-promo-description">Know the story behind our green paradise</p>
          <Link to="/about" className="btn-primary about-promo-button">
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPromoSection;