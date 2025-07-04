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
           className="inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white"
          >
            Share Experience
          </button>
        )}
      </div>

      {/* Review Form */}
      {showForm && (<ReviewForm onSubmit={handleReviewSubmit} onCancel={() => setShowForm(false)} />)}

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
