export default function Features(){
  const items = [
    { title: "High Protein, Low Calorie", text: "Naturally light snack with clean energy.", icon: "??" },
    { title: "Premium Grade A+", text: "Large, uniform pops ? perfect crunch.", icon: "?" },
    { title: "Roasted, Not Fried", text: "Zero trans-fat. Gluten-free & vegan.", icon: "??" },
    { title: "Farm-to-Pack Fresh", text: "Sourced from Mithila producers we trust.", icon: "??" },
    { title: "No Nasties", text: "No artificial colors or preservatives.", icon: "??" },
    { title: "Versatile", text: "Snack, kheer, curry, or festive fasting.", icon: "??" },
  ];
  return (
    <div>
      <h2>Why choose Mithila Makhana?</h2>
      <p className="sub">Authentic taste, superior quality, and honest ingredients ? all in one pack.</p>
      <div className="grid-3">
        {items.map((f, i) => (
          <div key={i} className="card feature">
            <div className="icon" aria-hidden>{f.icon}</div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
