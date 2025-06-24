// // import React, { useState, useEffect } from 'react';
// // import { fetchReviews } from '../API/GetApi';
// // import { verifyPhoneNumber, submitReview } from '../API/PostApi';
// // import ReviewForm from '../components/ReviewForm';
// // import ReviewCard from '../components/ReviewCard';

// // const ReviewsPage = () => {
// //   const [reviews, setReviews] = useState([]);
// //   const [phone, setPhone] = useState('');
// //   const [phoneVerified, setPhoneVerified] = useState(false);

// //   useEffect(() => {
// //     loadReviews();
// //   }, []);

// //   const loadReviews = async () => {
// //     const data = await fetchReviews();
// //     setReviews(data);
// //   };

// //   const handlePhoneSubmit = async () => {
// //     const result = await verifyPhoneNumber(phone);
// //     if (result.exists) {
// //       setPhoneVerified(true);
// //     } else {
// //       alert('Phone number not found.');
// //     }
// //   };

// //   const handleReviewSubmit = async (data) => {
// //     await submitReview(data);
// //     alert('Review submitted!');
// //     setPhoneVerified(false);
// //     await loadReviews();
// //   };

// //   return (
// //     <div className="p-6 mt-14">
// //       <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>

// //       {!phoneVerified ? (
// //         <div className="mb-6">
// //           <input
// //             type="text"
// //             placeholder="Enter phone number"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //             className="border p-2 mr-2"
// //           />
// //           <button onClick={handlePhoneSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
// //             Share Experience
// //           </button>
// //         </div>
// //       ) : (
// //         <ReviewForm onSubmit={handleReviewSubmit} />
// //       )}

// //       <div className="grid gap-4 md:grid-cols-2">
// //         {reviews.map((review) => (
// //           <ReviewCard key={review.reviewId} review={review} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewsPage;

// import React, { useState, useEffect } from 'react';
// import { fetchReviews } from '../API/GetApi';
// import { verifyPhoneNumber, submitReview } from '../API/PostApi';
// import ReviewForm from '../components/ReviewForm';
// import ReviewCard from '../components/ReviewCard';

// const ReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [phone, setPhone] = useState('');
//   const [phoneVerified, setPhoneVerified] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     loadReviews();
//   }, []);

//   const loadReviews = async () => {
//     const data = await fetchReviews();
//     setReviews(data);
//   };

//   const handlePhoneSubmit = async () => {
//     try {
//       const result = await verifyPhoneNumber(phone);
//       if (result.exists) {
//         setPhoneVerified(true);
//         setShowModal(false); // close modal
//       } else {
//         alert('Phone number not found.');
//       }
//     } catch (error) {
//       alert('Something went wrong. Try again.');
//     }
//   };

//   const handleReviewSubmit = async (data) => {
//     await submitReview(data);
//     alert('Review submitted!');
//     setPhoneVerified(false);
//     setPhone('');
//     await loadReviews();
//   };

//   return (
//     <div className="p-6 mt-14">
//       <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>

//       {/* Share Experience Button */}
//       {!phoneVerified && (
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
//         >
//           Share Experience
//         </button>
//       )}

//       {/* Review Form */}
//       {phoneVerified && <ReviewForm onSubmit={handleReviewSubmit} />}

//       {/* Modal for Phone Number Input */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
//           <div className="bg-white p-6 rounded shadow w-80">
//             <h2 className="text-lg font-semibold mb-4">Enter Your Phone Number</h2>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Phone Number"
//               className="w-full border p-2 mb-4"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePhoneSubmit}
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Reviews List */}
//       <div className="grid gap-4 md:grid-cols-2 mt-6">
//         {reviews.map((review) => (
//           <ReviewCard key={review.reviewId} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsPage;



// import React, { useState, useEffect } from 'react';
// import { fetchReviews } from '../API/GetApi';
// import { verifyPhoneNumber, submitReview } from '../API/PostApi';
// import ReviewForm from '../components/ReviewForm';
// import ReviewCard from '../components/ReviewCard';

// const ReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [phone, setPhone] = useState('');
//   const [phoneVerified, setPhoneVerified] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     loadReviews();
//   }, []);

//   const loadReviews = async () => {
//     const data = await fetchReviews();
//     setReviews(data);
//   };

//   const handlePhoneSubmit = async () => {
//     try {
//       const result = await verifyPhoneNumber(phone);
//       if (result.exists) {
//         setPhoneVerified(true);
//         setShowModal(false);
//       } else {
//         alert('Phone number not found.');
//       }
//     } catch {
//       alert('Something went wrong. Try again.');
//     }
//   };

//   const handleReviewSubmit = async (data) => {
//     await submitReview(data);
//     alert('Review submitted!');
//     setPhoneVerified(false);
//     setPhone('');
//     await loadReviews();
//   };

//   return (
//     <div className="mt-16 pb-8 border-b border-gray-200 bg-cream">
//       <div className="flex justify-between items-center mb-4 mx-w-4xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-accent my-4">Thoughts, Stories and Reviews</h1>

//         {!phoneVerified && (
//           <button
//             onClick={() => setShowModal(true)}
//             className="my-4 px-4 py-2 btn-primary btn-primary-hover"
//           >
//             Share Experience
//           </button>
//         )}
//       </div>

//       {phoneVerified && <ReviewForm onSubmit={handleReviewSubmit} />}

//       {showModal && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4 text-accent">Enter Your Phone Number</h2>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Phone Number"
//               className="w-full border p-2 rounded mb-4"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="btn-secondary"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePhoneSubmit}
//                 className="btn-secondary btn-secondary-hover"
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="grid gap-6 md:grid-cols-2 mt-8">
//         {reviews.map((review) => (
//           <ReviewCard key={review.reviewId} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsPage;

// import React, { useState, useEffect } from 'react';
// import { fetchReviews } from '../API/GetApi';
// import {postReview} from '../API/PostApi';
// import ReviewForm from '../components/ReviewForm';
// import ReviewCard from '../components/ReviewCard';

// const ReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     loadReviews();
//   }, []);

//   const loadReviews = async () => {
//     const data = await fetchReviews();
//     setReviews(data);
//   };

//   const handleReviewSubmit = async (reviewData) => {
//     try {
//       const phoneCheck = await submitReview(formData.phone);
//       if (!phoneCheck.exists) {
//         alert("Phone number not found. Please enter a valid number.");
//         return;
//       }

//       await submitReview(formData);
//       alert('Review submitted successfully!');
//       setShowForm(false);
//       await loadReviews();
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="mt-16 pb-8 border-b border-gray-200 bg-cream">
//       <div className="flex justify-between items-center mb-4 max-w-4xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-accent my-4">Thoughts, Stories and Reviews</h1>
//         {!showForm && (
//           <button
//             onClick={() => setShowForm(true)}
//             className="my-4 px-4 py-2 btn-primary btn-primary-hover"
//           >
//             Share Experience
//           </button>
//         )}
//       </div>

//       {showForm && <ReviewForm onSubmit={handleReviewSubmit} />}

//       <div className="grid gap-6 md:grid-cols-2 mt-8">
//         {reviews.map((review) => (
//           <ReviewCard key={review.reviewId} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsPage;

// import React, { useState, useEffect } from 'react';
// import { fetchReviews } from '../API/GetApi';
// import { postReview } from '../API/PostApi';
// import ReviewForm from '../components/ReviewForm';
// import ReviewCard from '../components/ReviewCard';

// const ReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     loadReviews();
//   }, []);

//   const loadReviews = async () => {
//     try {
//       const data = await fetchReviews();
//       setReviews(data);
//     } catch (err) {
//       console.error('❌ Error loading reviews:', err);
//     }
//   };

//   const handleReviewSubmit = async (reviewData) => {
//     try {
//       await postReview(reviewData); // Directly post the form data
//       alert('✅ Review submitted successfully!');
//       setShowForm(false);
//       await loadReviews(); // Refresh the review list
//     } catch (error) {
//       if (error.response?.status === 404 || error.response?.status === 406) {
//         alert('❌ No booking found for this phone number.');
//       } else {
//         alert('❌ Something went wrong. Please try again.');
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="mt-16 pb-8 border-b border-gray-200 bg-cream">
//       <div className="flex justify-between items-center mb-4 max-w-4xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-accent my-4">Thoughts, Stories and Reviews</h1>
//         {!showForm && (
//           <button
//             onClick={() => setShowForm(true)}
//             className="my-4 px-4 py-2 btn-primary btn-primary-hover"
//           >
//             Share Experience
//           </button>
//         )}
//       </div>

//       {showForm && <ReviewForm onSubmit={handleReviewSubmit} />}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {reviews.map((review) => (
//           <ReviewCard key={review.reviewId} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsPage;


import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../API/GetApi';
import { postReview } from '../API/PostApi';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await fetchReviews();

      // Sort: with media first, then without
      const reviewsWithMedia = data.filter(
        (r) => r.media_list && r.media_list.length > 0
      );
      const reviewsWithoutMedia = data.filter(
        (r) => !r.media_list || r.media_list.length === 0
      );
      setReviews([...reviewsWithMedia, ...reviewsWithoutMedia]);
    } catch (err) {
      console.error('❌ Error loading reviews:', err);
    }
  };

  const handleReviewSubmit = async (reviewData) => {
    try {
      await postReview(reviewData);
      alert('✅ Review submitted successfully!');
      setShowForm(false);
      await loadReviews();
    } catch (error) {
      if (error.response?.status === 404 || error.response?.status === 406) {
        alert('❌ No booking found for this phone number.');
      } else {
        alert('❌ Something went wrong. Please try again.');
        console.error(error);
      }
    }
  };

  return (
    <div className="mt-16 pb-8 bg-cream">
      {/* Header + Button */}
      <div className="flex justify-between items-center mb-4  mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-accent my-4">
          Thoughts, Stories and Reviews
        </h1>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="my-4 px-4 py-2 btn-primary btn-primary-hover"
          >
            Share Experience
          </button>
        )}
      </div>

      {/* Review Form */}
      {showForm && ( <ReviewForm onSubmit={handleReviewSubmit} onCancel={ () => setShowForm(false)} /> )}

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start px-4 max-w-7xl mx-auto">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">Loading reviews ...</p>
        ) : (
        
        reviews.map((review) => (
          <ReviewCard key={review.reviewId} review={review} />
        ))
      )}
      </div>
    </div>
  );
};

export default ReviewsPage;
