import { useState } from 'react';
import { books, categories } from '../data/books';
import BookCard from './BookCard';
import './BooksSection.css';

const bookDisplayOrder = [
  'Mirror-Pain Synesthesia',
  'How to Quit Meth for Good',
  'How to Quit Weed for Good',
  'Rise Again',
  'So You Relapsed?',
  'SIGNAL',
  'What Is the Nature of Reality?',
  'The Mind, the Mouth, and the Gratitude Theory',
  'AI Manifestation Mastery',
  'Maybe You Are Not Lazy!',
  'ADHDO',
];

function sortBooksByDisplayOrder<T extends { title: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aIndex = bookDisplayOrder.indexOf(a.title);
    const bIndex = bookDisplayOrder.indexOf(b.title);

    const safeA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const safeB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

    if (safeA !== safeB) return safeA - safeB;
    return a.title.localeCompare(b.title);
  });
}

export default function BooksSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? books
      : books.filter((b) => b.category === activeCategory);

  const sortedBooks = sortBooksByDisplayOrder(filtered);
  const sortedAllBooks = sortBooksByDisplayOrder(books);

  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
  const bundlePrice = Math.round(totalPrice * 0.67);

  return (
    <section className="books-section" id="books">
      <div className="container">
        <div className="books-section__header">
          <div className="section-eyebrow">The Collection</div>
          <h2 className="section-title">
            BOOKS THAT <span className="accent">HIT DIFFERENT</span>
          </h2>
          <p className="section-sub">
            Written by someone who has been there. Each book is a tool, not just a story.
            Download instantly as a PDF and start reading within minutes.
          </p>
        </div>

        <div className="books-section__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="books-section__grid">
          {sortedBooks.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>

        <div className="books-section__bundle">
          <div className="bundle-card">
            <div className="bundle-card__glow" />
            <div className="bundle-card__left">
              <div className="bundle-card__eyebrow">💰 Best Value</div>
              <h3 className="bundle-card__title">Get The Full Collection</h3>
              <p className="bundle-card__desc">
                All {books.length} books in one complete collection. Your full toolkit for
                recovery, mindset, clarity, identity, and rebuilding your life.
              </p>
              <div className="bundle-card__books">
                {sortedAllBooks.map((b) => (
                  <span key={b.id} className="bundle-card__book-chip">
                    {b.icon}
                  </span>
                ))}
              </div>
            </div>

            <div className="bundle-card__right">
              <div className="bundle-card__price">
                <span className="bundle-card__was">Was R{totalPrice}</span>
                <span className="bundle-card__now">R{bundlePrice}</span>
                <span className="bundle-card__save">Save 33%</span>
              </div>

              <a href="#contact" className="bundle-card__cta">
                Get Bundle
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}