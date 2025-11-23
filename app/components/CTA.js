const whatsapp = (text = "Hello! I'm interested in Mithila Makhana.") =>
  `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

export default function CTA(){
  return (
    <div className="card" style={{display:'flex', gap:16, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
      <div>
        <h3 style={{margin:'0 0 6px'}}>Try the crunch everyone?s talking about</h3>
        <p className="sub" style={{margin:0}}>Free shipping above ?499 ? Freshly roasted ? 100% authentic Mithila</p>
      </div>
      <a className="btn btn-primary" href={whatsapp("I'd like to try Mithila Makhana. Please share offers.")}>Get Offer</a>
    </div>
  );
}
