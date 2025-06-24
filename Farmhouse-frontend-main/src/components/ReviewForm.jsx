// import React, { useState } from 'react';

// const ReviewForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     guestPhone: '',
//     reviewTitle: '',
//     reviewContent: '',
//     rating: 5
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 bg-white p-6 rounded shadow">
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Phone Number</label>
//         <input
//           type="text"
//           name="guestPhone"
//           value={formData.guestPhone}
//           onChange={handleChange}
//           className="input"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Review Title</label>
//         <input
//           type="text"
//           name="reviewTitle"
//           value={formData.reviewTitle}
//           onChange={handleChange}
//           className="input"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Review Content</label>
//         <textarea
//           name="reviewContent"
//           value={formData.reviewContent}
//           onChange={handleChange}
//           className="input"
//           rows={4}
//           required
//         ></textarea>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
//         <input
//           type="number"
//           name="rating"
//           value={formData.rating}
//           onChange={handleChange}
//           min="1"
//           max="5"
//           className="input"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="btn-primary btn-primary-hover w-full"
//       >
//         Submit Review
//       </button>
//     </form>
//   );
// };

// export default ReviewForm;

// import React, { useState } from 'react';

// const ReviewForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     guestPhone: '',
//     reviewTitle: '',
//     reviewContent: '',
//     rating: 5
//   });

//   const [mediaFiles, setMediaFiles] = useState([]);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleMediaChange = (e) => {
//     setMediaFiles(e.target.files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formPayload = new FormData();

//     // Append text fields
//     formPayload.append('guestPhone', formData.guestPhone);
//     formPayload.append('reviewTitle', formData.reviewTitle);
//     formPayload.append('reviewContent', formData.reviewContent);
//     formPayload.append('rating', formData.rating);

//     // Append each file in media_list[]
//     for (let i = 0; i < mediaFiles.length; i++) {
//       formPayload.append('media_list', mediaFiles[i]);
//     }

//     await onSubmit(formPayload); // send FormData to postReview
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 bg-white p-6 rounded shadow">
//       <input type="text" name="guestPhone" placeholder="Phone" onChange={handleChange} className="input mb-2" required />
//       <input type="text" name="reviewTitle" placeholder="Title" onChange={handleChange} className="input mb-2" required />
//       <textarea name="reviewContent" placeholder="Your experience..." onChange={handleChange} className="input mb-2" required />
//       <input type="number" name="rating" placeholder="Rating" min="1" max="5" onChange={handleChange} className="input mb-2" required />
      
//       <label className="block text-sm mb-1 font-medium">Upload Images or Videos</label>
//       <input type="file" multiple accept="image/,video/" onChange={handleMediaChange} className="input mb-4" />

//       <button type="submit" className="btn-primary btn-primary-hover w-full">
//         Submit Review
//       </button>
//     </form>
//   );
// };

// export default ReviewForm;


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
