import { SearchedBooks } from "./SearchedBooks";

export const SearchedHorrorBooks = ({ books, handleSelectedBooks }) => {
  const searchedHorrorBooks = books?.map((book) => (
    <SearchedBooks
      book={book}
      key={book.id}
      onClick={() => handleSelectedBooks(book.id)}
    />
  ));
  return <>{books.length ? searchedHorrorBooks : "loading..."}</>;
};
