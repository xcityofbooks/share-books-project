import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/navbar";
import { InputSearch } from "./Components/InputSearch";
import Home from "./Components/Home";
import { BooksSection } from "./Components/BooksSection";
import { SearchedHorrorBooks } from "./Components/SearchedHorrorBooks";
import { FantasyBooksSearched } from "./Components/FantasyBooksSearched";
import { NewSection } from "./Components/NewSection";
import { SelectedBook } from "./Components/SelectedBook";

const apiKey = "AIzaSyB7N8Ue4ueJ1DsjixGicPljs_yYPIR80YY";

export default function App() {
  const [books, setBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedBook, setSelectedBooks] = useState(null);
  const [showNewSection, setShowNewSection] = useState(false);
  const [isBookSelected, setIsBookSelected] = useState(false);

  useEffect(() => {
    fetchBooks("horror", setBooks);
    fetchBooks("fantasy", setFantasyBooks);
  }, []);

  const fetchBooks = async (searchQuery, setResult) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=12`
      );
      const result = await response.json();
      setResult(result.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleBackHome = () => {
    setShowNewSection(false);
    setIsBookSelected(false);
    setSelectedBooks(null);
    setSearchInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchBooks(searchInput, setSearchedBooks);
      setSearchedBooks([]);
      setShowNewSection(true);
      setIsBookSelected(false);
      setSearchInput("");
      setSelectedBooks(null);
    }
  };

  const handleSelectedBooks = async (id) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
      );
      const result = await response.json();
      setSelectedBooks(result);
      setIsBookSelected(true);
      setShowNewSection(false);
      setSearchInput("");
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <div className="App">
      <Navbar handleBackHome={handleBackHome}>
        <InputSearch
          query={searchInput}
          setQuery={setSearchInput}
          handleKeyPress={handleKeyPress}
        />{" "}
      </Navbar>

      {isBookSelected ? (
        <SelectedBook
          selectedBook={selectedBook}
          handleSelectedBooks={handleSelectedBooks}
        />
      ) : showNewSection ? (
        <NewSection
          query={searchInput}
          searchedBooks={searchedBooks}
          handleSelectedBooks={handleSelectedBooks}
        />
      ) : (
        <>
          <Home />
          <BooksSection title={"Weekly favorite horror books"}>
            <SearchedHorrorBooks
              books={books}
              handleSelectedBooks={handleSelectedBooks}
            />
          </BooksSection>
          <BooksSection title={"Weekly favorite fantasy books"}>
            <FantasyBooksSearched
              fantasyBooks={fantasyBooks}
              handleSelectedBooks={handleSelectedBooks}
            />
          </BooksSection>
        </>
      )}
    </div>
  );
}
