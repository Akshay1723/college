function About() {
  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          padding: 100px 20px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          overflow: hidden;
        }

        /* soft glow background effect */
        .about-section::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(14, 165, 233, 0.25);
          filter: blur(120px);
          top: -100px;
          left: -100px;
          border-radius: 50%;
        }

        .about-section::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.2);
          filter: blur(120px);
          bottom: -120px;
          right: -120px;
          border-radius: 50%;
        }

        .about-card {
          position: relative;
          z-index: 2;
          max-width: 750px;
          padding: 40px;
          border-radius: 18px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          color: white;
        }

        .about-card h2 {
          font-size: 2.2rem;
          margin-bottom: 15px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .about-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-card {
            padding: 25px;
          }

          .about-card h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            Our college is committed to excellence in education, innovation,
            and personal growth. With experienced faculty, modern facilities,
            and a supportive learning environment, we empower students to
            achieve academic success and build a strong future.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;