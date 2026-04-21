function Navbar() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          background-color: #0f172a;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar__container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar__logo {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .navbar__menu {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        .navbar__link {
          text-decoration: none;
          color: #e2e8f0;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .navbar__link:hover {
          color: #38bdf8;
        }

        @media (max-width: 768px) {
          .navbar__menu {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar__container">
          <h2 className="navbar__logo">My College</h2>

          <ul className="navbar__menu">
            <li><a href="#home" className="navbar__link">Home</a></li>
            <li><a href="#about" className="navbar__link">About</a></li>
            <li><a href="#courses" className="navbar__link">Courses</a></li>
            <li><a href="#contact" className="navbar__link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;