export default function FAQ(){
  const faqs = [
    { q: "What is Makhana?", a: "Makhana (fox nuts) are popped lotus seeds ? light, crunchy, and nutritious." },
    { q: "Is it healthy?", a: "Yes. It?s gluten-free, low calorie, and a good source of protein." },
    { q: "How do I store it?", a: "Keep in an airtight container. Consume within 60 days of opening." },
    { q: "Do you offer COD?", a: "Yes, COD available on orders above ?499 in select cities." },
  ];
  return (
    <div className="faq">
      <h2>Frequently asked questions</h2>
      <p className="sub">Everything you want to know before you munch.</p>
      <div className="grid-2">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
