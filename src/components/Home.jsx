import collageImg from "../assets/collage.jpg";

function Home() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 90px 40px;
          max-width: 1200px;
          margin: 60px auto;
          gap: 50px;
          border-radius: 20px;
          overflow: hidden;
          min-height: 500px;

          /* fallback background */
          background: #0f172a;
        }

        /* Background layer */
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url(${collageImg});
          background-size: cover;
          background-position: center;
          filter: brightness(0.6);
          transform: scale(1.05);
          z-index: 0;
        }

        /* Dark luxury overlay */
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.85),
            rgba(2, 132, 199, 0.35)
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          color: white;
        }

        .hero h1 {
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .hero p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .hero-btn {
          padding: 14px 28px;
          font-size: 1rem;
          font-weight: 600;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        /* Floating glass card effect (optional premium touch) */
        .hero-glass {
          position: relative;
          z-index: 2;
          padding: 30px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 70px 20px;
          }

          .hero h1 {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-content hero-glass">
          <h1>IHRD COLLEGE</h1>
          <p>
            Step into a future of excellence. Experience world-class education,
            innovative learning, and a campus built for success.
          </p>

          <a href="#courses">
            <button className="hero-btn">Explore Courses</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;