import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    guestPhone: '',
    reviewTitle: '',
    reviewContent: '',
    rating: 5,
  });

  const [mediaFiles, setMediaFiles] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files); // ✅ Convert FileList to array
    setMediaFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();

    // Append text fields
    formPayload.append('guestPhone', formData.guestPhone);
    formPayload.append('reviewTitle', formData.reviewTitle);
    formPayload.append('reviewContent', formData.reviewContent);
    formPayload.append('rating', formData.rating);

    // Append each media file
    mediaFiles.forEach((file) => {
      formPayload.append('media_list', file); // ✅ Appending multiple files under same key
    });

    await onSubmit(formPayload);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className=" bg-white p-8 rounded-2xl shadow-xl space-y-4">
        <form
          onSubmit={handleSubmit}
        >
          <h1 className='farm-info-card-header mb-4 ml-55'>Share your Experience</h1>
          <input
            type="text"
            name="guestPhone"
            placeholder="Registered Phone Number"
            onChange={handleChange}
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
            required
          />
          <input
            type="text"
            name="reviewTitle"
            placeholder="Title"
            onChange={handleChange}
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400  mb-4"
            required
          />
          <textarea
            name="reviewContent"
            placeholder="Your experience..."
            onChange={handleChange}
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating 1-5)"
            min="1"
            max="5"
            onChange={handleChange}
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400  mb-4"
            required
          />

          <label className="block text-sm mb-1 font-medium">
            Upload Images or Videos <span className="text-gray-500 font-normal">(Only jpg and mp4 files are allowed)*</span>
          </label>
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          />

          <div className="flex gap-2">

            <button type="button" onClick={onCancel} className="btn-secondary btn-secondary-hover w-full">
              Cancel
            </button>
            <button type="submit" className="btn-primary btn-primary-hover w-full">
              Submit Review
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
