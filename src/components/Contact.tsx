import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your email / backend here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: 'general', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        {/* Left */}
        <div className="contact__info">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">
            LET'S <span className="accent">CONNECT</span>
          </h2>
          <p className="contact__desc">
            Questions about a book? Want to order a bundle? Need bulk copies for your
            organisation or recovery centre? P.D. personally reads every message.
          </p>

          <div className="contact__cards">
            <div className="contact__card">
              <div className="contact__card-icon">📧</div>
              <div>
                <div className="contact__card-label">Email</div>
                <a href="mailto:info@pdgroesbeek.co.za" className="contact__card-value">
                  info@pdgroesbeek.co.za
                </a>
              </div>
            </div>
            <div className="contact__card">
              <div className="contact__card-icon">🌐</div>
              <div>
                <div className="contact__card-label">Website</div>
                <a href="https://www.pdgroesbeek.co.za" target="_blank" rel="noreferrer" className="contact__card-value">
                  www.pdgroesbeek.co.za
                </a>
              </div>
            </div>
            <div className="contact__card">
              <div className="contact__card-icon">📍</div>
              <div>
                <div className="contact__card-label">Based In</div>
                <span className="contact__card-value">South Africa</span>
              </div>
            </div>
          </div>

          <div className="contact__promise">
            <div className="contact__promise-icon">🔒</div>
            <p>Your details are never shared. All PDF books are delivered instantly via email after payment.</p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. P.D. will be in touch shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="form-input form-select"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="general">General Enquiry</option>
                  <option value="book-order">Book Order / Payment Help</option>
                  <option value="bundle">Bundle Purchase</option>
                  <option value="bulk">Bulk / Organisation Order</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us what you need..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                Send Message
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
