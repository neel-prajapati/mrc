import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Experience', path: '/experience' },
    { name: 'Visit', path: '/visit' },
  ]

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <Link to="/">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="logo-icon">🍵</span>
            <span className="logo-text">Mr. Chaiwala</span>
          </motion.div>
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          {/* Order Now button in mobile menu */}
          <motion.a 
            href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary mobile-order-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </motion.a>
        </div>

        <motion.a 
          href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button nav-cta"
          whileHover={{ scale: 1.05, backgroundColor: '#B8912E' }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.a>

        <button 
          className={`mobile-menu ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile overlay */}
        <div 
          className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </motion.nav>
  )
}

export default Navbar
