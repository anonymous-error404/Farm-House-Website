import React from 'react';

const testimonials = [
  {
    name: "Rutika K",
    location: "Mumbai",
    text: "Very nice and friendly place for staycation. The staff was coordinative as well as the food was delicious, we enjoyed our stay at Nirmal Farms. Thank you for having us🙏",
    rating: 5
  },
  {
    name: "Dipalli M",
    location: "Thane",
    text: "The Nirmal Farms is peaceful place. Rooms are comfortable and well equipped. The staff and cook are very courteous , food is very tasty. Enjoyed a lot 👌👌👌👌.",
    rating: 5
  },
  {
    name: "Yavaraj P",
    location: "Kalyan",
    text: "Kudos to Mr. & Mrs Patil for warm hospitality, delicious food, serene surroundings and a lot of indoor and outdoor activities. It's a fantastic place for close get togethers and Groups. The hospitality team is truly service oriented, soft spoken and prompt",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="w-full py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-accent mb-16">Memories Made at Nirmal Farm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-primary-light mb-4">"{testimonial.text}"</p>
              <div className="font-bold text-accent">{testimonial.name}</div>
              <div className="text-primary-dark text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 