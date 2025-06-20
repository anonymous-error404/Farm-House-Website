// import React from 'react';

// const features = [
//   {
//     image: "/table.jpg",
//     title: "Peaceful Location",
//     description: "Escape the city noise and enjoy the tranquility of nature"
//   },
//   {
//     image: "/mango_pic.jpg",
//     title: "Organic Food",
//     description: "Fresh, locally grown produce from our own garden"
//   },
//   {
//     image: "/dog.jpg",
//     title: "Pet-friendly",
//     description: "Your furry friends are welcome to join your stay"
//   },
//   {
//     image: "/jhula.jpg",
//     title: "Safe & Family-friendly",
//     description: "A secure environment perfect for family getaways"
//   }
// ];

// const WhyStayWithUs = () => {
//   return (
//     <div className="w-full py-4 bg-[#fffbea]">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-accent text-center mb-12">Why Stay With Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="flex flex-col p-4 rounded-lg transition-shadow shadow-lg">
//               <div className="w-full mb-4">
//                 <img 
//                   src={feature.image} 
//                   alt={feature.title}
//                   className="w-full h-56 object-cover rounded-lg"
//                 />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2 text-primary-dark">{feature.title}</h3>
//                 <p className="text-primary-light">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyStayWithUs; 

import React from 'react';

const features = [
  {
    image: "/table.jpg",
    title: "Peaceful Location",
    description: "Escape the city noise and enjoy the tranquility of nature"
  },
  {
    image: "/mango_pic.jpg",
    title: "Organic Food",
    description: "Fresh, locally grown produce from our own garden"
  },
  {
    image: "/dog.jpg",
    title: "Pet-friendly",
    description: "Your furry friends are welcome to join your stay"
  },
  {
    image: "/jhula.jpg",
    title: "Safe & Family-friendly",
    description: "A secure environment perfect for family getaways"
  }
];

const WhyStayWithUs = () => {
  return (
    <section className="bg-[#fffbea] py-4">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-accent text-center mb-12">
          Why Stay With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover-scale transition-shadow"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-light text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStayWithUs;
