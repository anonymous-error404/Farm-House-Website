import axiosInstance from "./Axios";


export const postReview = async (formData) => {
  try {
    const response = await axiosInstance.post('/reviews/', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error posting review:', error);
    throw error;
  }
};

// 📨 Submit a new booking with form data
export const submitBooking = async (formData) => {
  try {
    const response = await axiosInstance.post('/bookings/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("✅ Booking submitted:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error submitting booking:", error.response?.data || error.message);
    alert("❌ Booking failed: " + JSON.stringify(error.response?.data));
    throw error;
  }
};

