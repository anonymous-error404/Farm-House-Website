import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import menuData from "../API/GetApi";

// ✅ Image imports with unique names
import vegImage from "../assets/menu1.avif";
import vegThaliImage from "../assets/veg thali.avif";
import nonVegImage from "../assets/non-Veg.jpg"; // Non-Veg Thali
import nonVegAltImage from "../assets/menu2.jpg"; // Non-Veg Starters
import beverageImage from "../assets/menu3.jpg";
import nonVegBeverageImage from "../assets/omlete.jpeg"; // Non-Veg Snacks & Beverage

// ✅ Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// ✅ Category-based image matching
const getImageForCategory = (key) => {
  if (key === "Veg - Starters") return vegImage;
  if (key === "Veg - Main Course") return vegThaliImage;
  if (key === "Non-Veg - Starters") return nonVegAltImage;
  if (key === "Non-Veg - Main Course") return nonVegImage;
  if (key === "Veg - Snacks&Beverages") return beverageImage;
  if (key === "Non-Veg - Snacks&Beverages") return nonVegBeverageImage;

  return "https://via.placeholder.com/400x300?text=No+Image";
};

const FoodMenu = () => {
  const [groupedMenu, setGroupedMenu] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const dishes = await menuData(); // Flat array from Django API
        const grouped = {};

        dishes.forEach((dish) => {
          const type = dish.dishSource?.toLowerCase() === "veg" ? "Veg" : "Non-Veg";
          const category = dish.dishCategory || "Others";
          const key = `${type} - ${category}`;

          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(dish);
        });

        setGroupedMenu(grouped);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="bg-[#fffbea] min-h-screen py-10 px-4 md:px-12 text-gray-800 font-sans mt-15">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl text-center font-bold text-accent mb-12"
      >
        Food Menu
      </motion.h1>

      {loading ? (
        <p className="text-center text-lg">Loading menu...</p>
      ) : (
        <div className="space-y-16">
          {Object.entries(groupedMenu).map(([key, items], index) => (
            <motion.div
              key={key}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-stretch gap-6`}
            >
              {/* Image */}
              <motion.div whileHover={{ scale: 1.02 }} className="md:w-1/2 w-full h-full">
                <img
                  src={getImageForCategory(key)}
                  alt={key}
                  className="w-50 h-130 object-cover rounded-xl shadow-md border border-yellow-100 transition duration-300"
                />
              </motion.div>

              {/* Dish List */}
              <div className="md:w-1/2 w-full bg-white backdrop-blur-sm border border-yellow-100 rounded-xl p-5 shadow-md transition-all flex flex-col justify-center">
                <div>
                  <h2 className="text-xl font-bold text-amber-700 mb-3 border-b pb-1 border-yellow-300">
                    {key}
                  </h2>
                  <ul className="space-y-2 text-base">
                    {items.map((dish) => (
                      <li
                        key={dish.dishId}
                        className="flex justify-between items-center border-b border-yellow-100 pb-1"
                      >
                        <div>
                          <span className="block font-medium">{dish.dishName}</span>
                          <small className="text-sm text-gray-500">{dish.dishDescription}</small>
                        </div>
                        <span className="text-amber-700 font-semibold">₹{dish.dishPrice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Optional Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-white border-l-4 border-blue-400 px-5 py-3 text-sm text-gray-800 rounded-lg shadow max-w-xl mx-auto"
      >
        <strong className="text-blue-700">Note:</strong> Fish dishes prepared at{" "}
        <span className="text-amber-700 font-bold">₹400/kg</span> when customers provide raw fish. 🐟✨
      </motion.div>
    </div>
  );
};

export default FoodMenu;
