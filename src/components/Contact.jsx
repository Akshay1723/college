function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          position: relative;
          padding: 100px 20px;
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        /* glowing background effect */
        .contact-section::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(14, 165, 233, 0.25);
          filter: blur(120px);
          top: -120px;
          left: -120px;
          border-radius: 50%;
        }

        .contact-section::after {
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

        .contact-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 600px;
          padding: 40px;
          border-radius: 18px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          text-align: center;
          color: white;
        }

        .contact-card h2 {
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .contact-card p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
        }

        .contact-info {
          margin-bottom: 25px;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .contact-form input {
          width: 100%;
          max-width: 350px;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
        }

        .contact-form input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .contact-form input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        }

        .contact-form button {
          padding: 12px 26px;
          border: none;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .contact-form button:hover {
          transform: translateY(-2px);
        }

        /* responsive */
        @media (max-width: 768px) {
          .contact-card {
            padding: 25px;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>We are here to help you with admissions and queries.</p>

          <div className="contact-info">
            📧 Gmail: casm121@gmail.com <br />
            📞 Phone: 9929929929
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Enter Email" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;