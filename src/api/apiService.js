import axios from "axios";

export const fetchBooksByTitle = async (title) => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${title}`
    );
    return response.data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
