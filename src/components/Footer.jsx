function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0f172a;
          color: #e2e8f0;
          text-align: center;
          padding: 20px 10px;
          transition: background 0.3s ease;
        }

        .footer p {
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .footer:hover {
          background: #1e293b;
        }
      `}</style>

      <footer className="footer" id="footer">
        <p>© 2026 CAS Malampuzha. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;