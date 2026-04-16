import './BookCard.css';

type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  originalPrice?: number;
  category: string;
  cover: string;
  icon: string;
  description: string;
};

type Props = {
  book: Book;
  index: number;
};

export default function BookCard({ book }: Props) {
  return (
    <div className="book-card">
      {/* COVER IMAGE */}
      <div className="book-card__image-wrap">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="book-card__image"
        />
      </div>

      {/* CONTENT */}
      <div className="book-card__content">
        <div className="book-card__category">
          {book.category.toUpperCase()}
        </div>

        <h3 className="book-card__title">{book.title}</h3>

        <p className="book-card__subtitle">{book.subtitle}</p>

        <p className="book-card__desc">{book.description}</p>

        {/* PRICE + CTA */}
        <div className="book-card__footer">
          <div className="book-card__price">
            {book.originalPrice && (
              <span className="book-card__was">
                R{book.originalPrice}
              </span>
            )}
            <span className="book-card__now">
              R{book.price}
            </span>
          </div>

          <button className="book-card__btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}