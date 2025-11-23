export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
        <span className="small">? {new Date().getFullYear()} Mithila Makhana. All rights reserved.</span>
        <span className="small">Made in Mithila, Bihar ? FSSAI Certified</span>
      </div>
    </footer>
  );
}
