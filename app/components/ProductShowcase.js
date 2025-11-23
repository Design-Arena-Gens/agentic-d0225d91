const whatsapp = (text) => `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

const products = [
  { name: "Classic Roasted Makhana", size: "250g", price: 249, tag: "Best Seller" },
  { name: "Peri-Peri Roasted Makhana", size: "250g", price: 279, tag: "Hot" },
  { name: "Premium Raw Makhana", size: "500g", price: 449, tag: "Family Pack" },
];

export default function ProductShowcase(){
  return (
    <div>
      <h2>Shop premium packs</h2>
      <p className="sub">Freshly roasted and sealed for lasting crunch. Free shipping on ?499+.</p>
      <div className="grid-3">
        {products.map((p) => (
          <div key={p.name} className="card product-card">
            <img alt={p.name} src="https://images.unsplash.com/photo-1604908554007-0743d5b10c16?q=80&w=1200&auto=format&fit=crop" style={{width:'100%', borderRadius:14}} />
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>{p.name}</strong>
              <span className="badge">{p.tag}</span>
            </div>
            <span className="small">Pack Size: {p.size}</span>
            <span className="price">?{p.price}</span>
            <div style={{display:'flex', gap:10, marginTop:6}}>
              <a className="btn btn-primary" href={whatsapp(`Order: ${p.name} (${p.size}) - ?${p.price}`)}>Order via WhatsApp</a>
              <a className="btn" href="#faq">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
