import React from "react";

const BookCard = ({ book }) => {
  const { title, author_name, cover_i } = book;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      {author_name && <p>by {author_name.join(", ")}</p>}
    </div>
  );
};

export default BookCard;
