import './TrustBar.css';

const features = [
  { icon: '📥', label: 'Instant PDF Download' },
  { icon: '🔒', label: 'Secure Checkout' },
  { icon: '📧', label: 'Delivered to Your Inbox' },
  { icon: '💯', label: 'Satisfaction Guaranteed' },
  { icon: '🇿🇦', label: 'South African Author' },
  { icon: '♾️', label: 'Read Anywhere, Any Device' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__track">
        {[...features, ...features].map((f, i) => (
          <div className="trust-bar__item" key={i}>
            <span className="trust-bar__icon">{f.icon}</span>
            <span className="trust-bar__label">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
