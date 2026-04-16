import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background elements */}
      <div className="hero__bg-grid" />
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__noise" />

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            P.D. Groesbeek — Author & Recovery Coach
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-line">YOUR MIND</span>
            <span className="hero__headline-line hero__headline-line--accent">CAN BE</span>
            <span className="hero__headline-line">REWIRED.</span>
          </h1>

          <p className="hero__sub">
            Books written from the inside out. Real stories. Raw truth.
            Practical tools for breaking free from addiction, rebuilding
            your identity, and living a life that actually means something.
          </p>

          <div className="hero__actions">
            <a href="#books" className="hero__btn hero__btn--primary">
              <span>Explore Books</span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#about" className="hero__btn hero__btn--ghost">
              About the Author
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">11</span>
              <span className="hero__stat-label">Books Published</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">1000+</span>
              <span className="hero__stat-label">Lives Changed</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">PDF</span>
              <span className="hero__stat-label">Instant Access</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual">
          <div className="hero__visual-card hero__visual-card--back" />
          <div className="hero__visual-card hero__visual-card--mid" />
          <div className="hero__visual-card hero__visual-card--front">
            <div className="hero__book-mock">
              <div className="hero__book-glow" />
              <img
                src="/mirror-pain-synesthesia.jpg"
                alt="Mirror-Pain Synesthesia by P.D. Groesbeek"
                className="hero__book-cover"
              />
            </div>
          </div>

          {/* Floating elements */}
          <div className="hero__float hero__float--1">
            <span>⭐⭐⭐⭐⭐</span>
            <span>"Changed my life"</span>
          </div>
          <div className="hero__float hero__float--2">
            <span>📥 PDF</span>
            <span>Instant Download</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}