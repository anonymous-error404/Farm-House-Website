import axiosInstance from "./Axios";


export const fetchReviews = async () => {
  try {
    const response = await axiosInstance.get('/reviews/');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
}
};

export const menuData = async () => {
  try {
    const response = await axiosInstance.get('/menu/');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const fetchBookings = async () => {
  try {
    const response = await axiosInstance.get('/bookings/');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

