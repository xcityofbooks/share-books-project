import "../bookcard.css";

export const SearchedBooks = ({ book, onClick }) => {
  const description = book?.volumeInfo.description;
  const paragraph = description?.split(" ").slice(0, 19).join(" ") + "...";
  const bookTitle = book?.volumeInfo.title;
  const shortTitle =
    bookTitle && bookTitle.length > 10
      ? bookTitle?.split(" ").slice(0, 10).join(" ")
      : bookTitle;

  return (
    <>
      <div className="book-card" key={book.id} onClick={onClick}>
        <div className="book-cover">
          {book.volumeInfo.imageLinks ? (
            <img
              src={book?.volumeInfo.imageLinks.thumbnail}
              alt={book?.volumeInfo.title}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="book-details">
          <h4>{shortTitle}</h4>
          <h5>{book?.volumeInfo.authors}</h5>
          <p style={{ fontWeight: 350 }}>
            <strong>Publish Date:</strong> {book?.volumeInfo.publishedDate}
          </p>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};
