import { Link } from "react-router-dom";
import image from "../assets/aboutbg.jpg"; // replace with your image path

const AboutPromoSection = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover h-96 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore the Nirmal Experience</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">Know the story behind our green paradise</p>
        <Link to="/blog" className="bg-orange-500 px-6 py-3 rounded text-white font-semibold hover:bg-orange-600 transition">
          Read Our Stories
        </Link>
      </div>
    </div>
  );
};

export default AboutPromoSection;

