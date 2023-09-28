import "../home.css";

export const BooksSection = ({ title, children }) => {
  return (
    <section className="section-container">
      <h1 className="title-sec">{title}</h1>
      <div className="books-container">{children}</div>
    </section>
  );
};
