import './About.css';

export default function About() {
  const milestones = [
    { year: '2010', label: 'Hit rock bottom with addiction' },
    { year: '2014', label: 'Achieved lasting sobriety' },
    { year: '2018', label: 'Published first book' },
    { year: '2020', label: 'Founded Rewired Minds' },
    { year: '2024', label: '6 books, 1000+ lives changed' },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Left visual */}
        <div className="about__visual">
          <div className="about__photo-frame">
            <div className="about__photo">
              <img
                src="/pdgroesbeek.png"
                alt="P.D. Groesbeek"
                className="about__photo-img"
              />
              <div className="about__photo-label">P.D. Groesbeek</div>
            </div>
            <div className="about__photo-border" />
          </div>

          <div className="about__quote">
            <span className="about__quote-mark">"</span>
            <p>
              I didn't write these books to tell you it's easy. I wrote them
              because I needed them and they didn't exist yet.
            </p>
            <span className="about__quote-name">— P.D. Groesbeek</span>
          </div>
        </div>

        {/* Right content */}
        <div className="about__content">
          <div className="section-eyebrow">About the Author</div>
          <h2 className="section-title">
            WRITTEN FROM <span className="accent">THE INSIDE OUT</span>
          </h2>

          <p className="about__body">
            P.D. Groesbeek is not a therapist observing from a distance. He is someone who has
            lived through the depths of addiction, mental health battles, and the slow, hard work
            of rebuilding a life. Every word in his books is earned.
          </p>

          <p className="about__body">
            Based in South Africa, P.D. created the Rewired Minds platform to make practical,
            honest guidance accessible to anyone who needs it — wherever they are in their journey.
            No judgment. No toxic positivity. Just tools that work.
          </p>

          {/* Milestones */}
          <div className="about__timeline">
            {milestones.map((m, i) => (
              <div className="about__milestone" key={i}>
                <div className="about__milestone-year">{m.year}</div>
                <div className="about__milestone-line" />
                <div className="about__milestone-label">{m.label}</div>
              </div>
            ))}
          </div>

          <a href="#books" className="hero__btn hero__btn--primary about__cta">
            Read the Books
          </a>
        </div>
      </div>
    </section>
  );
}