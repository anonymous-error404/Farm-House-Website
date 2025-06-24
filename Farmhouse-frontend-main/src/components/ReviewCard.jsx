// import React from 'react';

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="border rounded p-4 shadow">
//       <h2 className="text-lg font-semibold">{review.reviewTitle || 'No Title'}</h2>
//       <p className="text-sm text-gray-500">{review.reviewDate}</p>
//       <p>Rating: {review.rating} ⭐</p>
//       <p>{review.reviewContent}</p>

//       <div className="flex flex-wrap gap-2 mt-2">
//         {review.media_list.map((media, idx) =>
//           media.media_type.startsWith('image') ? (
//             <img key={idx} src={`data:${media.media_type};base64,${media.media}`} alt="Review Media" className="w-24 h-24 object-cover rounded" />
//           ) : (
//             <video key={idx} controls className="w-24 h-24 rounded">
//               <source src={`data:${media.media_type};base64,${media.media}`} type={media.media_type} />
//             </video>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

import React from 'react';

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="border shadow-md rounded-xl p-4 bg-white space-y-2 hover-scale transition">
//       <h2 className="text-xl font-semibold text-primary">{review.reviewTitle || 'No Title'}</h2>
//       <p className="text-sm text-gray-500">{review.reviewDate}</p>
//       <p className="text-primary-light">Rating: {review.rating} ⭐</p>
//       <p className="text-primary">{review.reviewContent}</p>

//       <div className="flex flex-wrap gap-2 mt-2">
//         {review.media_list.map((media, idx) =>
//           media.media_type.startsWith('image') ? (
//             <img
//               key={idx}
//               src={`data:${media.media_type};base64,${media.media}`}
//               alt="Review Media"
//               className="w-24 h-24 object-cover rounded"
//             />
//           ) : (
//             <video key={idx} controls className="w-24 h-24 rounded">
//               <source src={`data:${media.media_type};base64,${media.media}`} type={media.media_type} />
//             </video>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;


// const ReviewCard = ({ review }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden border hover:shadow-2xl transition duration-300 flex flex-col">
//       {/* Media Carousel */}
//       <div className="relative w-full h-64 bg-black">
//         {review.media_list.length > 0 ? (
//           review.media_list[0].media_type.startsWith("image") ? (
//             <img
//               src={`data:${review.media_list[0].media_type};base64,${review.media_list[0].media}`}
//               alt="Review Media"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <video
//               controls
//               className="w-full h-full object-cover"
//               poster="/video-poster.jpg"
//             >
//               <source
//                 src={`data:${review.media_list[0].media_type};base64,${review.media_list[0].media}`}
//                 type={review.media_list[0].media_type}
//               />
//             </video>
//           )
//         ) : (
//           <div className="flex items-center justify-center h-full text-white">
//             No Media Available
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-5 space-y-2 flex flex-col flex-grow">
//         <h3 className="text-2xl font-semibold text-primary">{review.reviewTitle}</h3>

//         <p className="text-sm text-gray-600">
//           By <span className="text-primary-light font-medium">{review.guestName || "Anonymous"}</span> • {review.reviewDate}
//         </p>

//         {/* Rating */}
//         <div className="flex items-center text-yellow-500 text-sm">
//           {"★".repeat(review.rating)}{" "}
//           {"☆".repeat(5 - review.rating)}
//           <span className="ml-2 text-gray-500">({review.rating}/5)</span>
//         </div>

//         {/* Content */}
//         <p className="text-gray-700">{review.reviewContent}</p>

//         {/* Read More Button */}
//         <div className="pt-3 mt-auto">
//           <button className="text-[#B45309] hover:underline font-medium">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

// const ReviewCard = ({ review }) => {
//   const hasMedia = review.media_list && review.media_list.length > 0;

//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden border hover:shadow-2xl transition duration-300 flex flex-col">
//       {/* Conditional Media */}
//       {hasMedia && (
//         <div className="relative w-full h-64 bg-black">
//           {review.media_list[0].media_type.startsWith("image") ? (
//             <img
//               src={`data:${review.media_list[0].media_type};base64,${review.media_list[0].media}`}
//               alt="Review Media"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <video
//               controls
//               className="w-full h-full object-cover"
//               poster="/video-poster.jpg"
//             >
//               <source
//                 src={`data:${review.media_list[0].media_type};base64,${review.media_list[0].media}`}
//                 type={review.media_list[0].media_type}
//               />
//             </video>
//           )}
//         </div>
//       )}

//       {/* Card Content */}
//       <div className="p-5 space-y-2 flex flex-col flex-grow">
//         <h3 className="text-xl font-semibold text-primary">{review.reviewTitle || 'No Title'}</h3>
//         <p className="text-sm text-gray-600">
//           By <span className="text-primary-light font-medium">{review.guestName || 'Anonymous'}</span> • {review.reviewDate}
//         </p>

//         {/* Rating */}
//         <div className="flex items-center text-yellow-500 text-sm">
//           {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//           <span className="ml-2 text-gray-500">({review.rating}/5)</span>
//         </div>

//         <p className="text-gray-700">{review.reviewContent}</p>

//         <div className="pt-3 mt-auto">
//           <button className="text-[#B45309] hover:underline font-medium">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [showModal, setShowModal] = useState(false);
  const hasMedia = review.media_list && review.media_list.length > 0;

  return (
    <>
      {/* Card */}
      <div className="day-card">
        {hasMedia && (
          <div className="relative w-full">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              dynamicHeight={false}
              className="review-carousel"
            >
              {review.media_list.map((media, idx) =>
                media.media_type.startsWith('image') ? (
                  <img
                    key={idx}
                    src={`data:${media.media_type};base64,${media.media}`}
                    alt={`Media ${idx}`}
                    className="object-cover h-64 w-full"
                  />
                ) : (
                  <video key={idx} controls className="w-full h-64 object-cover">
                    <source
                      src={`data:${media.media_type};base64,${media.media}`}
                      type={media.media_type}
                    />
                  </video>
                )
              )}
            </Carousel>
          </div>
        )}

        {/* Basic Info */}
        <div>
          <h3 className="text-xl font-semibold text-primary">{review.reviewTitle || 'No Title'}</h3>
          <p className="text-sm text-gray-600">
            • {review.reviewDate}
          </p>
          <div className="flex items-center text-yellow-500 text-sm">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            <span className="ml-2 text-gray-500">({review.rating}/5)</span>
          </div>

          {/* Read More Button */}
          <button
            onClick={() => setShowModal(true)}
            className="text-[#B45309] hover:underline font-medium"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-primary mb-2">{review.reviewTitle}</h2>
            <p className="text-sm text-gray-500 mb-2">
            • {review.reviewDate}
            </p>

            <div className="flex items-center text-yellow-500 text-sm mb-3">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              <span className="ml-2 text-gray-500">({review.rating}/5)</span>
            </div>

            {/* Full Carousel */}
            {hasMedia && (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                dynamicHeight
                className="mb-4"
              >
                {review.media_list.map((media, idx) =>
                  media.media_type.startsWith('image') ? (
                    <img
                      key={idx}
                      src={`data:${media.media_type};base64,${media.media}`}
                      alt={`Media ${idx}`}
                      className="object-contain max-h-[400px]"
                    />
                  ) : (
                    <video key={idx} controls className="w-full max-h-[400px] object-contain">
                      <source
                        src={`data:${media.media_type};base64,${media.media}`}
                        type={media.media_type}
                      />
                    </video>
                  )
                )}
              </Carousel>
            )}

            <p className="text-gray-800">{review.reviewContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;

// import  { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ReviewCard = ({ review }) => {
//   const [showModal, setShowModal] = useState(false);
//   const hasMedia = review.media_list && review.media_list.length > 0;

//   return (
//     <>
//       {/* Review Card */}
//       <div className="bg-white rounded-2xl shadow-xl border transition duration-300">
//         {/* Carousel */}
//         {hasMedia && (
//           <div className="relative w-full">
//             <Carousel
//               showThumbs={false}
//               showStatus={false}
//               infiniteLoop
//               dynamicHeight
//               className="review-carousel"
//             >
//               {review.media_list.map((media, idx) =>
//                 media.media_type.startsWith('image') ? (
//                   <img
//                     key={idx}
//                     src={`data:${media.media_type};base64,${media.media}`}
//                     alt={`Media ${idx}`}
//                     className="w-full object-cover"
//                   />
//                 ) : (
//                   <video
//                     key={idx}
//                     controls
//                     className="w-full object-cover max-h-[300px]"
//                   >
//                     <source
//                       src={`data:${media.media_type};base64,${media.media}`}
//                       type={media.media_type}
//                     />
//                   </video>
//                 )
//               )}
//             </Carousel>
//           </div>
//         )}

//         {/* Info Section */}
//         <div className="p-4 space-y-2">
//           <h3 className="text-xl font-semibold text-primary">
//             {review.reviewTitle || 'No Title'}
//           </h3>
//           <p className="text-sm text-gray-600">
//             By <span className="text-primary-light">{review.guestName || 'Anonymous'}</span> •{' '}
//             {review.reviewDate}
//           </p>

//           {/* Rating */}
//           <div className="flex items-center text-yellow-500 text-sm">
//             {'★'.repeat(review.rating)}
//             {'☆'.repeat(5 - review.rating)}
//             <span className="ml-2 text-gray-500">({review.rating}/5)</span>
//           </div>

//           {/* Read More Button */}
//           <button
//             onClick={() => setShowModal(true)}
//             className="text-[#B45309] hover:underline font-medium"
//           >
//             Read More
//           </button>
//         </div>
//       </div>

//       {/* Modal for Full Details */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold text-primary mb-2">
//               {review.reviewTitle}
//             </h2>
//             <p className="text-sm text-gray-500 mb-2">
//               By{' '}
//               <span className="text-primary-light">
//                 {review.guestName || 'Anonymous'}
//               </span>{' '}
//               • {review.reviewDate}
//             </p>

//             <div className="flex items-center text-yellow-500 text-sm mb-3">
//               {'★'.repeat(review.rating)}
//               {'☆'.repeat(5 - review.rating)}
//               <span className="ml-2 text-gray-500">({review.rating}/5)</span>
//             </div>

//             {/* Full Carousel in Modal */}
//             {hasMedia && (
//               <Carousel
//                 showThumbs={false}
//                 showStatus={false}
//                 infiniteLoop
//                 dynamicHeight
//                 className="mb-4"
//               >
//                 {review.media_list.map((media, idx) =>
//                   media.media_type.startsWith('image') ? (
//                     <img
//                       key={idx}
//                       src={`data:${media.media_type};base64,${media.media}`}
//                       alt={`Media ${idx}`}
//                       className="object-contain max-h-[400px]"
//                     />
//                   ) : (
//                     <video
//                       key={idx}
//                       controls
//                       className="w-full max-h-[400px] object-contain"
//                     >
//                       <source
//                         src={`data:${media.media_type};base64,${media.media}`}
//                         type={media.media_type}
//                       />
//                     </video>
//                   )
//                 )}
//               </Carousel>
//             )}

//             <p className="text-gray-800 whitespace-pre-line">
//               {review.reviewContent}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ReviewCard;
