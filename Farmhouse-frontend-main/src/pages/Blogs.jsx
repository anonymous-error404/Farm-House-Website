import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogPopup from '../components/BlogPopup';
// Import images
import home1 from '../assets/home1.jfif';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jfif';
import hero3 from '../assets/hero3.jfif';
import aboutbg from '../assets/aboutbg.jpg';
import video from '../assets/video.mp4';

// Image Slider Component
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
          />
        ) : (
          <img
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        )}
        
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             onClick={goToPrevious}>
          ❮
        </div>
        
        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

const Blogs = () => {
  // State management
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [userSubmission, setUserSubmission] = useState({
    title: '',
    content: '',
    rating: 5,
    media: {
      type: 'gallery',
      items: []
    },
    name: '',
    email: ''
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  const blogsPerPage = 4;

  // Fetch data on component mount
  useEffect(() => {
    // Mock data - replace with actual API call in production
    const mockBlogs = [
      {
        id: 1,
        title: "Sunset at Nirmal Farm",
        author: "Priya Sharma",
        date: "2023-10-15",
        content: "Full content about the sunset... More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos More Content Space: The popup now has more room to display blog content, images, and videos",
        category: "Farm Life Stories",
        rating: 5,
        tags: ["sunset", "nature", "photography"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero3 },
            { type: "video", url: video },
            { type: "image", url: aboutbg }
          ]
        },
        isFeatured: true
      },
      {
        id: 2,
        title: "Our Weekend with Friends",
        author: "Rahul Verma",
        date: "2023-10-10",
        content: "Full content about the weekend...",
        category: "Guest Experiences",
        rating: 4,
        tags: ["friends", "weekend", "fun"],
        media: {
          type: "mixed",
          items: [
            { type: "video", url: video },
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      },
      {
        id: 3,
        title: "Organic Farming Journey",
        author: "Amit Patel",
        date: "2023-10-05",
        content: "Full content about organic farming...",
        category: "Farm Life Stories",
        rating: 5,
        tags: ["organic", "farming", "sustainability"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      },
      {
        id: 4,
        title: "Farm-to-Table Cooking Class",
        author: "Neha Gupta",
        date: "2023-10-01",
        content: "Full content about cooking class...",
        category: "Guest Experiences",
        rating: 4,
        tags: ["cooking", "food", "learning"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      },
      {
        id: 5,
        title: "Morning Yoga at the Farm",
        author: "Deepak Singh",
        date: "2023-09-28",
        content: "Full content about yoga sessions...",
        category: "Wellness",
        rating: 5,
        tags: ["yoga", "wellness", "morning"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      },
      {
        id: 6,
        title: "Seasonal Harvest Festival",
        author: "Meera Kapoor",
        date: "2023-09-25",
        content: "Full content about harvest festival...",
        category: "Farm Life Stories",
        rating: 4,
        tags: ["festival", "harvest", "celebration"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      },
      {
        id: 7,
        title: "Seasonal Harvest Festival",
        author: "Meera Kapoor",
        date: "2023-09-25",
        content: "Full content about harvest festival...",
        category: "Farm Life Stories",
        rating: 3,
        tags: ["festival", "harvest", "celebration"],
        media: {
          type: "mixed",
          items: [
            { type: "image", url: hero1 },
            { type: "image", url: hero2 }
          ]
        },
        isFeatured: false
      }
    ];

    setBlogs(mockBlogs);
    setFeaturedBlog(mockBlogs.find(blog => blog.isFeatured));
  }, []);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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

  // Handle user submission
  const handleSubmitPost = (e) => {
    e.preventDefault();
    
    // Check word limit
    const wordCount = userSubmission.content.trim().split(/\s+/).length;
    if (wordCount > 1000) {
      alert("Your story exceeds the 1000 word limit. Please shorten it and try again.");
      return;
    }
    
    const submission = {
      ...userSubmission,
      date: new Date().toISOString().split('T')[0],
      author: userSubmission.name || 'Anonymous',
      category: 'Guest Stories',
      tags: [],
      isFeatured: false
    };
    
    console.log("Submitting user post:", submission);
    alert("Thank you for your submission! It will be reviewed before publishing.");
    setUserSubmission({
      title: '',
      content: '',
      rating: 5,
      media: {
        type: 'gallery',
        items: []
      },
      name: '',
      email: ''
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Create URLs for preview and store file information
    const mediaItems = files.map(file => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video/') ? 'video' : 'image',
      file: file // Store the actual file object
    }));
    
    // Update state with new media items
    setUserSubmission(prev => ({
      ...prev,
      media: {
        type: 'mixed',
        items: [...prev.media.items, ...mediaItems],
        files: [...(prev.media.files || []), ...files]
      }
    }));
  };

  // Render featured blog
  const renderFeaturedBlog = () => {
    if (!featuredBlog) return null;
    
    return (
      <div className="mt-16 mb-8 pb-8 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Featured Story</h2>
          <button 
            onClick={() => {
              const formElement = document.getElementById('submission-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-4 py-2 text-white rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            Share Your Story
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredBlog.media?.items && featuredBlog.media.items.length > 0 && (
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <ImageSlider images={featuredBlog.media.items} />
            </div>
          )}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{featuredBlog.title}</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--color-primary-light)' }}>By {featuredBlog.author} • {featuredBlog.date}</p>
            <div className="mb-4">
              <StarRating rating={featuredBlog.rating} size="lg" />
            </div>
            <button 
              onClick={() => setSelectedBlog(featuredBlog)}
              className="font-medium hover:underline text-left"
              style={{ color: 'var(--color-secondary)' }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render blog cards
  const renderBlogCards = () => {
    return currentBlogs.map(blog => (
      <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {blog.media?.items && blog.media.items.length > 0 && (
          <div className="h-48">
            <ImageSlider images={blog.media.items} />
          </div>
        )}
        <div className="p-4">
          <span className="inline-block px-2 py-1 text-white text-xs rounded mb-2"
                style={{ backgroundColor: 'var(--color-secondary)' }}>
            {blog.category}
          </span>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{blog.title}</h3>
          <p className="text-xs mb-2" style={{ color: 'var(--color-primary-light)' }}>By {blog.author} • {blog.date}</p>
          <div className="mb-3">
            <StarRating rating={blog.rating} />
          </div>
          <button 
            onClick={() => setSelectedBlog(blog)}
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--color-secondary)' }}
          >
            Read More
          </button>
        </div>
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-1">
            {blog.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs rounded"
                    style={{ 
                      backgroundColor: 'var(--color-primary-bg)',
                      color: 'var(--color-primary)'
                    }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  // Render user submission form
  const renderUserSubmissionForm = () => {
    const wordCount = userSubmission.content.trim().split(/\s+/).length;
    const isOverLimit = wordCount > 1000;
    
    return (
      <div id="submission-form" className="bg-gray-50 w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-lg mt-8"
           style={{ backgroundColor: 'var(--color-background-light)' }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Share Your Story</h3>
        <p className="mb-4" style={{ color: 'var(--color-primary)' }}>
          Have you visited our farm stay? Share your photos, videos, or story with us!
        </p>
        
        <form onSubmit={handleSubmitPost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={userSubmission.title}
              onChange={(e) => setUserSubmission({...userSubmission, title: e.target.value})}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Your Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setUserSubmission({...userSubmission, rating: star})}
                  className="text-2xl hover:scale-110 transition-transform"
                  style={{ 
                    color: star <= userSubmission.rating ? 'var(--color-secondary)' : '#d1d5db'
                  }}
                >
                  {star <= userSubmission.rating ? "★" : "☆"}
                </button>
              ))}
              <span className="text-sm ml-2" style={{ color: 'var(--color-primary-light)' }}>({userSubmission.rating}/5)</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Your Story</label>
            <p className="text-sm mb-2" style={{ color: 'var(--color-primary-light)' }}>
              Write your complete story here. Maximum 1000 words.
            </p>
            <textarea 
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                isOverLimit ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="8"
              value={userSubmission.content}
              onChange={(e) => setUserSubmission({...userSubmission, content: e.target.value})}
              required
            ></textarea>
            <div className="flex justify-between items-center mt-1">
              <p className={`text-sm ${isOverLimit ? 'text-red-500' : ''}`}
                 style={{ color: isOverLimit ? '#ef4444' : 'var(--color-primary-light)' }}>
                {wordCount} words written {isOverLimit && `(exceeds 1000 word limit)`}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-primary-light)' }}>
                {userSubmission.content.length} characters
              </p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Photos/Videos</label>
            <p className="text-sm mb-2" style={{ color: 'var(--color-primary-light)' }}>
              You can upload multiple photos and videos together.
            </p>
            <input 
              type="file" 
              multiple
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              onChange={handleFileChange}
              accept="image/*, video/*"
            />
            
            {/* Preview of selected media */}
            {userSubmission.media.items.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {userSubmission.media.items.map((item, index) => (
                    <div key={index} className="relative">
                      {item.type === 'video' ? (
                        <video 
                          src={item.url}
                          className="w-full aspect-video object-cover rounded-lg"
                          controls
                        />
                      ) : (
                        <img 
                          src={item.url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const newItems = [...userSubmission.media.items];
                          const newFiles = [...userSubmission.media.files];
                          newItems.splice(index, 1);
                          newFiles.splice(index, 1);
                          setUserSubmission(prev => ({
                            ...prev,
                            media: {
                              ...prev.media,
                              items: newItems,
                              files: newFiles
                            }
                          }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    {userSubmission.media.items.length} items selected
                  </p>
                  <button
                    type="button"
                    onClick={() => setUserSubmission(prev => ({
                      ...prev,
                      media: {
                        type: 'mixed',
                        items: [],
                        files: []
                      }
                    }))}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove all media
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Your Name (optional)</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={userSubmission.name}
                onChange={(e) => setUserSubmission({...userSubmission, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>Email (optional)</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={userSubmission.email}
                onChange={(e) => setUserSubmission({...userSubmission, email: e.target.value})}
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`px-4 py-2 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              isOverLimit 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'text-white'
            }`}
            style={{ 
              backgroundColor: isOverLimit ? '#9ca3af' : 'var(--color-secondary)'
            }}
            disabled={isOverLimit}
          >
            Submit Your Story
          </button>
          <p className="text-xs mt-2" style={{ color: 'var(--color-primary-light)' }}>
            Note: All submissions are moderated before publishing. Maximum 1000 words per story.
          </p>
        </form>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Blog Section */}
      {renderFeaturedBlog()}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3">
          {/* Blog List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderBlogCards()}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-1">
              <button 
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`px-3 py-1 border rounded ${
                    currentPage === page ? 'text-white border-green-600' : 'border-gray-300 hover:bg-gray-100'
                  }`}
                  style={{ 
                    backgroundColor: currentPage === page ? 'var(--color-secondary)' : 'transparent',
                    borderColor: currentPage === page ? 'var(--color-secondary)' : 'var(--color-primary)',
                    color: currentPage === page ? 'white' : 'var(--color-primary)'
                  }}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              
              <button 
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
          
          {/* User Submission Form */}
          {renderUserSubmissionForm()}
        </div>
      </div>

      {/* Blog Popup */}
      {selectedBlog && (
        <BlogPopup 
          blog={selectedBlog} 
          onClose={() => setSelectedBlog(null)} 
        />
      )}
    </div>
  );
};

export default Blogs;