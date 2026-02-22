import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">🍵</span>
            <span className="logo-text">Mr. Chaiwala</span>
          </Link>
          <p>Adelaide's late night chai destination. Open 5PM - 5AM daily.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/visit">Visit Us</Link>
          </div>
          <div className="footer-column">
            <h4>Popular Items</h4>
            <Link to="/menu">Chai Cutting</Link>
            <Link to="/menu">Vadapav</Link>
            <Link to="/menu">Maggi</Link>
            <Link to="/menu">Samosa Pav</Link>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:Bhagyeshthakar@gmail.com">Email Us</a>
            <a href="tel:0422372222">0422 372 222</a>
            <a href="https://www.facebook.com/profile.php?id=100091952810140" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah" target="_blank" rel="noopener noreferrer">Order Online</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Mr. Chaiwala. All rights reserved.</p>
        <p>162 Port Rd, Hindmarsh SA 5007</p>
      </div>
    </footer>
  )
}

export default Footer
