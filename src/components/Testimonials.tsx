import './Testimonials.css';

const testimonials = [
  {
    quote: "I've read a lot of recovery books. Most feel like they were written by someone who read other recovery books. This one felt like it was written by someone who actually lived it. That made all the difference.",
    name: "Thabo M.",
    location: "Johannesburg",
    book: "How to Quit Meth For Good",
    stars: 5,
  },
  {
    quote: "I relapsed twice before I found this book. It didn't shame me or give me a checklist. It just talked to me like a real person. I've been clean for 14 months now.",
    name: "Anita K.",
    location: "Cape Town",
    book: "So You Relapsed?",
    stars: 5,
  },
  {
    quote: "The gratitude section alone rewired how I talk to myself every single morning. I didn't expect a self-help book to actually work. This one did.",
    name: "Pieter V.",
    location: "Pretoria",
    book: "The Mind, The Mouth, The Gratitude Habit",
    stars: 5,
  },
  {
    quote: "Rise Again is the book I wish I had five years ago. P.D. doesn't pretend rebuilding is easy — but he shows you it's possible, step by step.",
    name: "Lerato S.",
    location: "Durban",
    book: "Rise Again",
    stars: 5,
  },
  {
    quote: "I bought the full bundle. Each book hits a different part of what I was going through. The value is insane for what you get.",
    name: "Marco D.",
    location: "Port Elizabeth",
    book: "Full Bundle",
    stars: 5,
  },
  {
    quote: "Mirror-Pain Synesthesia finally explained something I've been experiencing for years. The relief of just being understood — I can't put a price on that.",
    name: "Samantha R.",
    location: "Bloemfontein",
    book: "Mirror-Pain Synesthesia",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="books-section__header">
          <div className="section-eyebrow">Reader Stories</div>
          <h2 className="section-title">
            REAL PEOPLE. <span className="accent">REAL RESULTS.</span>
          </h2>
          <p className="section-sub">
            These books don't promise miracles. They promise honesty. Here's what readers say.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div
              className="testimonial-card"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="testimonial-card__stars">
                {'★'.repeat(t.stars)}
              </div>
              <blockquote className="testimonial-card__quote">
                "{t.quote}"
              </blockquote>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-card__info">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__meta">{t.location} · {t.book}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
