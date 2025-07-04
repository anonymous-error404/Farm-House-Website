// import { FaInstagram } from "react-icons/fa";
// const ContactPage = () => {
//   return (
//     <div className="bg-[#fffbea] text-green-900 font-sans">

//       {/* Section 1 - Welcome & Image */}
//       <section className="px-6 pt-12 mt-12 text-center">
//         <h2 className="text-4xl font-bold mb-2 text-accent">Let’s Connect</h2>
//         <p className="text-gray-600 max-w-xl mx-auto mb-8">
//           We'd love to hear from you! Whether it's a visit, question, or feedback — we're here.
//         </p>
//       </section>

//       {/* Section 2 - Contact Details + Form */}
//       <section className="flex flex-col md:flex-row gap-10 px-6 md:px-16 pb-12">
//         {/* Left - Contact Info */}
//         <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8 space-y-5">
//           <h3 className="text-3xl font-bold text-primary mb-4">Get in Touch</h3>
//           <p className="flex items-center gap-2 text-gray-600">We’re located where the noise fades and peace begins. It’s simple to find us, but the memories will stay with you.</p>
//           <div className="text-gray-900 space-y-3">
//             <p className="flex items-center gap-2">📍 <span>64/1, Madhuban Society Chon Gaon,
//                                                         <br /> Barvi Dam Road,Badlapur (W), 
//                                                         <br />Thane 421503.</span></p>
//             <p className="flex items-center gap-2">📞 <span><a href="tel:9870204394"> 98702 04394</a>
//                                                         <br /><a href="tel:9870204424"> 98702 04424</a></span></p>
                                                       
//              <p>
//                 <a
//                   href="https://www.instagram.com/nirmal_farmstays"  
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-pink-600 hover:text-pink-800"
//                 >
//                   <FaInstagram className="text-2xl" />
//                   <span>@nirmal_farmstays</span> 
//                 </a>
//               </p>
//           </div>

//         </div>

//         {/* Right - Form */}
//         <form className="md:w-1/2 bg-[#ffffff] p-8 rounded-2xl shadow-xl space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//           <div className="flex gap-4">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-1/2 p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               type="text"
//               placeholder="Your Phone"
//               className="w-1/2 p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>
//           <textarea
//             rows="4"
//             placeholder="Message"
//             className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           ></textarea>
//           <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
//             Send Message
//           </button>
//         </form>
//       </section>



//       {/* Section 3 - Map */}
//       <section className="h-[400px] w-full">
//         <iframe
//           title="Nirmal Farm Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6910440254715!2d73.2943718!3d19.2086921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78d0013bb815b%3A0x511225329843361b!2sNirmal%20Farm!5e0!3m2!1sen!2sin!4v1749883825729!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-[#fffbea] text-green-900 font-sans min-h-screen">

      {/* 🌿 Welcome Section */}
      <section className="text-center px-4 pt-20 pb-10">
        <h2 className="text-4xl font-bold mb-2 text-accent">Let’s Connect</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-6">
          We'd love to hear from you! Whether it’s a visit, question, or feedback — we’re always open.
        </p>
      </section>

      {/* 🌿 Divider Line */}
      <div className="border-t border-green-300 mx-auto w-[90%] md:w-3/4 lg:w-1/2 mb-10"></div>

      {/* 🌿 Contact Info Row */}
      <section className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 px-6 md:px-20 lg:px-40 pb-20 text-green-900 text-base space-y-10 md:space-y-0">

        {/* Address */}
        <div className="w-full md:w-1/3 space-y-2 text-center md:text-left">
          <h3 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2">📍 Address</h3>
          <p className="leading-relaxed">
            64/1, Madhuban Society Chon Gaon, <br />
            Barvi Dam Road, Badlapur (W), <br />
            Thane 421503
          </p>
        </div>

        {/* Phone */}
        <div className="w-full md:w-1/3 space-y-2 text-center">
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2">📞 Phone</h3>
          <div className="space-y-1">
            <a href="tel:9870204394" className="hover:text-green-700 hover:underline block">98702 04394</a>
            <a href="tel:9870204424" className="hover:text-green-700 hover:underline block">98702 04424</a>
          </div>
        </div>

        {/* Instagram */}
        <div className="w-full md:w-1/3 space-y-2 text-center md:text-left">
          <h3 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2">📸 Instagram</h3>
          <a
            href="https://www.instagram.com/nirmal_farmstays"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center md:justify-start items-center gap-2 text-pink-600 hover:text-pink-800 font-medium"
          >
            <FaInstagram className="text-2xl" />
            @nirmal_farmstays
          </a>
        </div>
      </section>

      {/* 🌿 Divider */}
      <div className="border-t border-green-300 mx-auto w-[90%] md:w-3/4 lg:w-1/2 mb-10"></div>

      {/* 🌿 Google Map */}
      <section className="h-[400px] w-full">
        <iframe
          title="Nirmal Farm Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6910440254715!2d73.2943718!3d19.2086921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78d0013bb815b%3A0x511225329843361b!2sNirmal%20Farm!5e0!3m2!1sen!2sin!4v1749883825729!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
