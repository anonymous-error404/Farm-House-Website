import axiosInstance from "./Axios";

// const fetchData = async () => {
//   try {
//     const response = await axiosInstance.get('/reviews/');
//     console.log("Data fetched successfully:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }

const menuData = async () => {
  try {
    const response = await axiosInstance.get('/menu/');
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default menuData;
