import { SearchedBooks } from "./SearchedBooks";

export const FantasyBooksSearched = ({ fantasyBooks, handleSelectedBooks }) => {
  const searchedFantasyBooks = fantasyBooks?.map((book) => (
    <SearchedBooks
      book={book}
      key={book.id}
      onClick={() => handleSelectedBooks(book.id)}
    />
  ));
  return <>{fantasyBooks.length ? searchedFantasyBooks : "loading..."}</>;
};
