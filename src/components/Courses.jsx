function Courses() {
  const courses = [
    { name: "BCA", desc: "Computer Applications & Software Development" },
    { name: "BSc", desc: "Science, Research & Innovation Studies" },
    { name: "BCom", desc: "Commerce, Finance & Business Studies" },
    { name: "BA", desc: "Arts, Humanities & Social Sciences" }
  ];

  return (
    <>
      <style>{`
        .courses-section {
          position: relative;
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          overflow: hidden;
        }

        /* glowing background */
        .courses-section::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(14, 165, 233, 0.25);
          filter: blur(130px);
          top: -150px;
          left: -150px;
          border-radius: 50%;
        }

        .courses-section::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(37, 99, 235, 0.2);
          filter: blur(130px);
          bottom: -150px;
          right: -150px;
          border-radius: 50%;
        }

        .courses-title {
          position: relative;
          z-index: 2;
          font-size: 2.4rem;
          color: white;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .course-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .card {
          width: 240px;
          padding: 25px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(14, 165, 233, 0.5);
        }

        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #ffffff;
        }

        .card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
        }

        /* responsive */
        @media (max-width: 768px) {
          .courses-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="courses-section" id="courses">
        <h2 className="courses-title">Our Courses</h2>

        <div className="course-container">
          {courses.map((course, index) => (
            <div className="card" key={index}>
              <h3>{course.name}</h3>
              <p>{course.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;