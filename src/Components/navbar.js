import "../navbar.css";

export default function Navbar({ children, handleBackHome }) {
  return (
    <>
      <nav className="navbar-styles">
        <div className="shared-class" onClick={handleBackHome}>
          <span>🤖</span>
          <h2>Share</h2>
          <h2 style={{ color: "#3c9e9e" }}>Books</h2>
        </div>
        <div className="shared-class nav-btn">
          <h4>Download</h4>
          <h4>Request</h4>
          <h4>Discuss</h4>
        </div>
        <div className="shared-class only-btns">
          {children}
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
