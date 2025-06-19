import React, { useState } from 'react';

// Star Rating Component
const StarRating = ({ rating, size = "sm" }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-${size === "lg" ? "lg" : "sm"}`}>
        {i <= rating ? "★" : "☆"}
      </span>
    );
  }
  return (
    <div className="flex items-center gap-1" style={{ color: 'var(--color-secondary)' }}>
      {stars}
      <span className="text-xs text-gray-500 ml-1">({rating}/5)</span>
    </div>
  );
};

// Image Slider Component (copied from Blogs.jsx)
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-full group">
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        {images[currentIndex]?.type === 'video' ? (
          <video
            src={images[currentIndex].url}
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        ) : (
          <img
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        )}
        
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
             onClick={goToPrevious}>
          ❮
        </div>
        
        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
             onClick={goToNext}>
          ❯
        </div>
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              slideIndex === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
};

const BlogPopup = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl" 
           style={{ 
             backgroundColor: 'var(--color-background-white)',
             boxShadow: 'var(--shadow-lg)',
             borderRadius: 'var(--radius-lg)'
           }}>
        {/* Header with close button */}
        <div className="sticky top-0 bg-white p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center z-10"
             style={{ 
               backgroundColor: 'var(--color-background-white)',
               borderColor: 'var(--color-primary-bg)'
             }}>
          <h2 className="text-lg sm:text-2xl font-bold pr-2"
              style={{ color: 'var(--color-primary)' }}>{blog.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none flex-shrink-0 transition-colors"
            style={{ 
              color: 'var(--color-primary)',
              transition: 'var(--transition-normal)'
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Blog content */}
        <div className="p-3 sm:p-6">
          {/* Author and date */}
          <div className="flex items-center text-sm mb-4"
               style={{ color: 'var(--color-primary-light)' }}>
            <span>By {blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <StarRating rating={blog.rating} size="lg" />
          </div>

          {/* Media content */}
          {blog.media?.type === 'gallery' && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blog.media.items.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Blog image ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                    style={{ borderRadius: 'var(--radius-lg)' }}
                  />
                ))}
              </div>
            </div>
          )}
          {blog.media?.type === 'video' && (
            <div className="mb-6 aspect-video">
              <video 
                controls 
                className="w-full h-full rounded-lg"
                style={{ 
                  maxHeight: '300px',
                  borderRadius: 'var(--radius-lg)'
                }}
                playsInline
              >
                <source src={blog.media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {blog.media?.type === 'mixed' && blog.media.items && blog.media.items.length > 0 && (
            <div className="mb-6 h-64 sm:h-96">
              <ImageSlider images={blog.media.items} />
            </div>
          )}

          {/* Blog content */}
          <div className="prose max-w-none">
            <div className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap"
                 style={{ color: 'var(--color-primary)' }}>
              {blog.content}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full"
                style={{ 
                  backgroundColor: 'var(--color-primary-bg)',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPopup; 