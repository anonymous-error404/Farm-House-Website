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