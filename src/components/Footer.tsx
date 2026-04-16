import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <ellipse cx="18" cy="17" rx="13" ry="15" fill="url(#footerHeadGrad)" />
                <path d="M18 32 C18 32 10 28 9 20" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
                <path d="M18 32 C18 32 26 28 27 20" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="14" cy="11" r="1.5" fill="white" />
                <circle cx="21" cy="9" r="1.5" fill="white" />
                <circle cx="24" cy="15" r="1.5" fill="white" />
                <circle cx="13" cy="17" r="1.5" fill="white" />
                <circle cx="19" cy="20" r="1.5" fill="white" />
                <line x1="14" y1="11" x2="21" y2="9" stroke="white" strokeWidth="1.2" />
                <line x1="21" y1="9" x2="24" y2="15" stroke="white" strokeWidth="1.2" />
                <line x1="14" y1="11" x2="13" y2="17" stroke="white" strokeWidth="1.2" />
                <line x1="13" y1="17" x2="19" y2="20" stroke="white" strokeWidth="1.2" />
                <line x1="24" y1="15" x2="19" y2="20" stroke="white" strokeWidth="1.2" />
                <defs>
                  <radialGradient id="footerHeadGrad" cx="40%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#f48c06" />
                    <stop offset="60%" stopColor="#e85d04" />
                    <stop offset="100%" stopColor="#1a0a00" />
                  </radialGradient>
                </defs>
              </svg>
              <div>
                <div className="footer__logo-rewired">REWIRED</div>
                <div className="footer__logo-minds">MINDS</div>
              </div>
            </div>
            <p className="footer__tagline">
              Books written from lived experience.<br />
              Real tools for real change.
            </p>
            <a href="https://www.pdgroesbeek.co.za" target="_blank" rel="noreferrer" className="footer__site-link">
              www.pdgroesbeek.co.za ↗
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Books</h4>
            <ul className="footer__links">
              <li><a href="#books">How to Quit Meth For Good</a></li>
              <li><a href="#books">So You Relapsed?</a></li>
              <li><a href="#books">Rise Again</a></li>
              <li><a href="#books">The Mind, The Mouth, The Gratitude Habit</a></li>
              <li><a href="#books">Mirror-Pain Synesthesia</a></li>
              <li><a href="#books">Programming Your Abundance Mindset</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <ul className="footer__links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#books">Books</a></li>
              <li><a href="#about">About P.D.</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <h4 className="footer__col-title" style={{ marginTop: '28px' }}>Delivery</h4>
            <ul className="footer__links">
              <li>📥 Instant PDF download</li>
              <li>📧 Delivered via email</li>
              <li>💳 Secure payment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Rewired Minds / P.D. Groesbeek. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#contact">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
