import "../newsection.css";
import { SearchedBooks } from "./SearchedBooks";

export const NewSection = ({ searchedBooks, handleSelectedBooks }) => {
  return (
    <>
      <section className="section-container">
        <h1 className="new-section-title">Your searched result</h1>
        <div className="books-container">
          {searchedBooks?.map((book) => (
            <SearchedBooks
              book={book}
              key={book.id}
              onClick={() => handleSelectedBooks(book.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
};
