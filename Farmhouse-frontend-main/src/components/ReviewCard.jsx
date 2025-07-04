import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [showModal, setShowModal] = useState(false);
  const hasMedia = review.media_list && review.media_list.length > 0;

  return (
    <>
      {/* Card */}
      <div className=" bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto ">
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

