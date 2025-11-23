const whatsapp = (text = "Hello! I'm interested in Mithila Makhana.") =>
  `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-badge" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.09 8.26H20.66L15.28 12.09L17.36 18.35L12 14.52L6.64 18.35L8.72 12.09L3.34 8.26H9.91L12 2Z" fill="#0b0f14"/>
            </svg>
          </span>
          <span>Mithila Makhana</span>
        </div>
        <div className="nav-links">
          <a href="#features">Benefits</a>
          <a href="#shop">Shop</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-primary" href={whatsapp("I'd like to place an order for Mithila Makhana")}>Order Now</a>
        </div>
      </div>
    </nav>
  );
}
