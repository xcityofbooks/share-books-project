import "../InputSearch.css";

export const InputSearch = ({ query, setQuery, handleKeyPress }) => {
  return (
    <div className="input-container">
      <input
        className="input-bar"
        type="text"
        value={query}
        placeholder="What do you want to read?"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
