import "./index.css";
import "./App.css";

function App() {
  return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Welcome to <span>Boadicea</span>
          </h1>

          <h2 className="home-subtitle">Design System</h2>

          <p className="home-description">
            Boadicea is a structured, accessible and scalable design system
            built to ensure consistency, usability and clarity across digital
            products. It provides a robust foundation aligned with modern
            accessibility standards.
          </p>

          <div className="home-links">
            <a href="#">View Figma File</a>
            <a href="#">View GitHub Repository</a>
            <a href="#">Documentation (Zeroheight)</a>
          </div>

          <p className="home-footer">
            © {new Date().getFullYear()} Boadicea Design System — Built with care.
          </p>
        </div>
      </div>
  );
}

export default App;