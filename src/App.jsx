import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { fetchBooksByTitle } from "./api/apiService";
import "./index.css";  // Import global styles

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (title) => {
    setLoading(true);
    const results = await fetchBooksByTitle(title);
    setBooks(results);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h2>Find Your Next Favorite Book</h2>
        <SearchBar onSearch={handleSearch} />
        {loading ? <p>Loading...</p> : <BookList books={books} />}
      </div>
    </div>
  );
};

export default App;
