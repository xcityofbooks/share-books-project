import "../selectedbook.css";

export const SelectedBook = ({ selectedBook }) => {
  if (!selectedBook) {
    return null;
  }

  return (
    <section className="section-container">
      <div className="selected-books-container">
        <div className="selected-books-img">
          {selectedBook.volumeInfo.imageLinks ? (
            <img
              src={selectedBook?.volumeInfo.imageLinks.thumbnail}
              alt={selectedBook?.volumeInfo.title}
              className="selected-books-img-size"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="selected-books-text-container">
          <div className="selected-books-info">
            <h1>{selectedBook.volumeInfo.title}</h1>
            <h3 className="selected-books-author-genre">Author:</h3>
            <p> {selectedBook.volumeInfo.authors}</p>
            <h3 className="selected-books-author-genre">Genre:</h3>
            <p>{selectedBook.volumeInfo.categories}</p>
            <button className="selected-books-btn">Download</button>
          </div>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: selectedBook.volumeInfo.description,
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
