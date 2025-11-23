export default function Testimonials(){
  const items = [
    { name: "Aarav, Delhi", text: "Crisp and fresh! Perfect evening snack.", stars: 5 },
    { name: "Priya, Patna", text: "Authentic Mithila taste. Loved the classic roast.", stars: 5 },
    { name: "Rahul, Mumbai", text: "Not oily, very light, and tasty!", stars: 4 },
  ];
  return (
    <div>
      <h2>What our customers say</h2>
      <p className="sub">Real reviews from real snackers.</p>
      <div className="grid-3">
        {items.map((t, i) => (
          <div key={i} className="card testimonial">
            <div className="stars">{"?".repeat(t.stars)}{"?".repeat(5 - t.stars)}</div>
            <p>?{t.text}?</p>
            <span className="small">? {t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
