import React from "react";
import { motion } from "framer-motion";
import kandaBhaji from "../assets/menu1.avif";
import chickenPakoda from "../assets/menu2.jpg";
import beverageImg from "../assets/menu3.jpeg";
import vegThali from "../assets/veg thali.avif";
import nonVegThali from "../assets/non-veg.jpg";

const menuSections = [
  {
    title: "Starters (Veg)",
    color: "text-green-700",
    img: kandaBhaji,
    items: [
      ["Kanda Bhaji", 100],
      ["Batata Bhaji", 100],
      ["Paneer Pakoda (10pc)", 200],
      ["Chana Koliwada", 300],
      ["Paneer Tandoori (1kg)", 1000],
    ],
  },
  {
    title: "Starters (Non-Veg)",
    color: "text-rose-700",
    img: chickenPakoda,
    items: [
      ["Chicken Pakoda (10pc)", 200],
      ["Chicken Lollipop (6pc)", 250],
      ["Chicken Lapeta", 350],
      ["Chicken Chilli", 250],
      ["Chicken Tandoori (1kg)", 1000],
    ],
  },
  {
    title: "Beverages & Snacks",
    color: "text-indigo-700",
    img: beverageImg,
    items: [
      ["Milk", 40],
      ["Coffee", 30],
      ["Lime Water", 40],
      ["Water", 25],
      ["Poha", 40],
      ["Upma", 40],
      ["Sheera", 50],
      ["Omlette", 30],
    ],
  },
];

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

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FoodMenu = () => {
  return (
    <div className="bg-gradient-to-br from-lime-50 via-amber-50 to-rose-50 min-h-screen py-10 px-4 md:px-12 text-gray-800 font-sans mt-15">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl text-center font-bold text-amber-700 mb-12"
      >
        Resort Food Menu
      </motion.h1>

      <div className="space-y-16">
        {menuSections.map(({ title, color, img, items }, index) => (
          <motion.div
            key={title}
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
            <motion.div whileHover={{ scale: 1.02 }} className="md:w-1/2 w-full">
              <img
                src={img}
                alt={title}
                className="w-full h-81 object-cover rounded-xl shadow-md border border-yellow-100 transition duration-300"
              />
            </motion.div>

            {/* Text Block */}
            <div className="md:w-1/2 w-full h-81 bg-white/70 backdrop-blur-sm border border-yellow-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
              <div>
                <h2 className={`text-xl font-bold ${color} mb-3 border-b pb-1 border-yellow-300`}>
                  {title}
                </h2>
                <ul className="space-y-1 text-base">
                  {items.map(([item, price]) => (
                    <li
                      key={item}
                      className="flex justify-between border-b border-yellow-100 pb-1"
                    >
                      <span>{item}</span>
                      <span className="text-amber-700 font-semibold">₹{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fish Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/60 border-l-4 border-blue-400 px-5 py-3 text-sm text-gray-800 rounded-lg shadow max-w-xl mx-auto"
      >
        <strong className="text-blue-700">Note:</strong> Fish dishes prepared at{" "}
        <span className="text-amber-700 font-bold">₹400/kg</span> when customers provide raw fish. 🐟✨
      </motion.div>

      {/* Detailed Menu Section */}
      <motion.div
        className="bg-[#FFF9F2] mt-20 p-6 font-sans text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpItem}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-green-700 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🍽 Full Course Meals
          </motion.h2>

          {/* Breakfast */}
          <motion.div className="mb-10 bg-white shadow-lg rounded-lg p-6" variants={fadeUpItem}>
            <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Breakfast</h2>
            <p className="text-lg">Poha, Upma, Misal Pav, Bhurji Pav</p>
          </motion.div>

          {/* Veg Menu */}
          <motion.div className="grid md:grid-cols-2 gap-6 mb-10" variants={fadeUpItem}>
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Lunch / Dinner Menu - Veg
              </h2>
              <ul className="list-disc list-inside text-lg space-y-1">
                <li>Salad</li>
                <li>Chapati / Bhakri</li>
                <li>Rice</li>
                <li>Dal</li>
                <li>2 Vegetables</li>
                <li>Pickle / Papad</li>
                <li>Sweet Dish</li>
              </ul>
            </motion.div>
            <motion.img
              src={vegThali}
              alt="Veg Thali"
              className="rounded-lg shadow-md object-cover h-80 w-full"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Non-Veg Menu */}
          <motion.div className="grid md:grid-cols-2 gap-6 mb-10" variants={fadeUpItem}>
            <motion.img
              src={nonVegThali}
              alt="Tandoori"
              className="rounded-lg shadow-md object-cover h-80 w-full"
              whileHover={{ scale: 1.02 }}
            />
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                Lunch / Dinner Menu - Non-Veg
              </h2>
              <ul className="list-disc list-inside text-lg space-y-1">
                <li>Salad</li>
                <li>Chapati / Bhakri</li>
                <li>Rice</li>
                <li>Chicken Gravy</li>
                <li>Pickle / Papad</li>
                <li>Sweet Dish</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Starters Note */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            variants={fadeUpItem}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Starters</h2>
            <p className="text-lg">
              Will be charged separately (As per requirement)
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodMenu;
