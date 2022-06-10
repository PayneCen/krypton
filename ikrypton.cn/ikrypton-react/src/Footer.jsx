import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>
            <a href="https://baidu.com/">Payne Cen.</a>
          </p>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/PayneCen"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="mailto:payne_cen@outlook.com"
            className="btn contact-details"
          >
            <i className="fas fa-envelope"></i> Mail
          </a>
        </div>
      </section>
      <footer>
        <p>
          <a href="https://baidu.com/" className="ICP">
            Copyright&copy; 2022 -Payne
          </a>
          |
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            className="ICP"
          >
            黔ICP备2021002098号-2
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
