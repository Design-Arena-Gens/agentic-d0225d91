const whatsapp = (text = "Hello! I'm interested in Mithila Makhana.") =>
  `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

export default function Hero(){
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="product-badge">Authentic ? Mithila ? Bihar</span>
          <h1>Premium Mithila Makhana ? healthy, crunchy, and truly delicious.</h1>
          <p className="lead">Handpicked fox nuts from Bihar?s Maithil belt. Slow-roasted for perfect crunch. Protein-rich, gluten-free, and light.</p>
          <div className="cta">
            <a className="btn btn-primary" href={whatsapp("I want to buy Mithila Makhana (send variants)")}>Order on WhatsApp</a>
            <a className="btn btn-ghost" href="#features">Why Makhana?</a>
          </div>
          <p className="small" style={{marginTop:10}}>Free COD above ?499 ? Freshly packed ? FSSAI Certified</p>
        </div>
        <div className="card">
          <img alt="Makhana bowl" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop" style={{width:'100%', borderRadius:14}} />
        </div>
      </div>
    </header>
  );
}
