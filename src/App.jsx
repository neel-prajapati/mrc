import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import './App.css'

// Custom hook for intersection observer animations
const useInView = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView]
}

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="logo-icon">🍵</span>
          <span className="logo-text">Mr. Chaiwala</span>
        </motion.div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'Story', 'Menu', 'Experience', 'Visit'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ color: '#D4A853' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          className="cta-button nav-cta"
          whileHover={{ scale: 1.05, backgroundColor: '#B8912E' }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  )
}

// Hero Section
const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="hero" id="home">
      <motion.div className="hero-bg" style={{ y }}>
        <div className="hero-overlay"></div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`float-element element-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>✨ Authentic Indian Chai Experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="hero-title-line">Where Every</span>
          <span className="hero-title-main">Sip Tells a Story</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Experience the rich heritage of Indian chai, crafted with passion 
          and served with love in the heart of Australia.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button 
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 168, 83, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
          </motion.button>
          <motion.button 
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.button>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: "10+", label: "Years of Heritage" },
            { number: "50K+", label: "Happy Customers" },
            { number: "25+", label: "Chai Varieties" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  )
}

// Story Section
const Story = () => {
  const [ref, isInView] = useInView(0.2)

  return (
    <section className="story" id="story" ref={ref}>
      <div className="story-container">
        <motion.div 
          className="story-image-wrapper"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="story-image">
            <div className="image-frame"></div>
            <div className="image-accent"></div>
          </div>
          <div className="story-badge">
            <span className="badge-year">Est.</span>
            <span className="badge-number">2014</span>
          </div>
        </motion.div>

        <motion.div 
          className="story-content"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Our Heritage</span>
          <h2>A Journey From <span className="highlight">Streets of India</span> to Australia</h2>
          
          <p className="story-lead">
            Born from the bustling streets of India, Mr. Chaiwala brings the authentic 
            taste of traditional chai to Australian shores.
          </p>
          
          <p>
            Every cup we serve carries generations of chai-making wisdom, blended with 
            the finest spices sourced directly from Indian farms. Our master chai-walas 
            have perfected the art of brewing the perfect cup – a symphony of cardamom, 
            ginger, cinnamon, and love.
          </p>

          <div className="story-features">
            {[
              { icon: "🌿", title: "Premium Spices", desc: "Sourced from Kerala & Assam" },
              { icon: "👨‍🍳", title: "Master Crafted", desc: "Traditional brewing methods" },
              { icon: "❤️", title: "Made with Love", desc: "Every cup, every time" },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Menu Section
const Menu = () => {
  const [ref, isInView] = useInView(0.1)
  const [activeCategory, setActiveCategory] = useState('chai')

  const menuItems = {
    chai: [
      { name: "Masala Chai", price: "$5.50", desc: "Classic spiced tea with cardamom, ginger & cinnamon", popular: true },
      { name: "Cutting Chai", price: "$4.00", desc: "Mumbai-style half cup of intense chai", popular: false },
      { name: "Kesar Chai", price: "$6.50", desc: "Saffron-infused luxury chai", popular: true },
      { name: "Ginger Chai", price: "$5.00", desc: "Extra ginger punch for chai lovers", popular: false },
      { name: "Kulhad Chai", price: "$6.00", desc: "Served in traditional clay cup", popular: true },
      { name: "Tandoori Chai", price: "$7.00", desc: "Smoky chai with roasted flavor", popular: true },
    ],
    snacks: [
      { name: "Samosa", price: "$4.50", desc: "Crispy pastry with spiced potato filling", popular: true },
      { name: "Vada Pav", price: "$6.00", desc: "Mumbai's favorite street burger", popular: true },
      { name: "Pav Bhaji", price: "$12.00", desc: "Buttery mashed vegetables with bread", popular: false },
      { name: "Kachori", price: "$5.00", desc: "Flaky pastry with dal filling", popular: false },
      { name: "Bhel Puri", price: "$7.50", desc: "Crunchy puffed rice mix", popular: true },
      { name: "Dahi Puri", price: "$8.00", desc: "Crispy shells with yogurt", popular: false },
    ],
    sweets: [
      { name: "Gulab Jamun", price: "$5.50", desc: "Soft milk dumplings in rose syrup", popular: true },
      { name: "Jalebi", price: "$6.00", desc: "Crispy spirals soaked in saffron syrup", popular: true },
      { name: "Ras Malai", price: "$7.00", desc: "Creamy cheese patties in cardamom milk", popular: true },
      { name: "Kulfi", price: "$5.00", desc: "Traditional Indian ice cream", popular: false },
    ],
  }

  const categories = [
    { id: 'chai', label: 'Signature Chai', icon: '🍵' },
    { id: 'snacks', label: 'Street Snacks', icon: '🥟' },
    { id: 'sweets', label: 'Sweet Treats', icon: '🍮' },
  ]

  return (
    <section className="menu" id="menu" ref={ref}>
      <div className="menu-bg-pattern"></div>
      
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">Our Menu</span>
        <h2>Crafted with <span className="highlight">Passion</span></h2>
        <p>Discover our carefully curated selection of authentic Indian flavors</p>
      </motion.div>

      <motion.div 
        className="menu-categories"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="menu-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems[activeCategory].map((item, i) => (
            <motion.div
              key={item.name}
              className="menu-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            >
              {item.popular && <span className="popular-badge">Popular</span>}
              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
              <motion.button 
                className="add-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.button 
        className="cta-button primary menu-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Full Menu
      </motion.button>
    </section>
  )
}

// Experience Section (Gallery)
const Experience = () => {
  const [ref, isInView] = useInView(0.1)

  const experiences = [
    { title: "Cozy Ambiance", desc: "Warm lighting, comfortable seating, and the aroma of fresh chai", icon: "✨" },
    { title: "Live Chai Making", desc: "Watch our chai-walas craft your perfect cup", icon: "👨‍🍳" },
    { title: "Cultural Events", desc: "Regular poetry nights, music sessions, and chai talks", icon: "🎭" },
    { title: "Private Events", desc: "Host your special moments with our catering services", icon: "🎉" },
  ]

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">The Experience</span>
        <h2>More Than Just <span className="highlight">Chai</span></h2>
        <p>Immerse yourself in the complete Mr. Chaiwala experience</p>
      </motion.div>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="exp-icon">{exp.icon}</div>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="testimonial-section"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            The best chai I've ever had outside of India. The Masala Chai here 
            transports me straight to the streets of Mumbai. Absolutely magical!
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">RS</div>
            <div>
              <h4>Raj Sharma</h4>
              <span>Regular Customer</span>
            </div>
          </div>
          <div className="testimonial-stars">★★★★★</div>
        </div>
      </motion.div>
    </section>
  )
}

// Visit Section (Contact)
const Visit = () => {
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="visit" id="visit" ref={ref}>
      <div className="visit-container">
        <motion.div 
          className="visit-content"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Visit Us</span>
          <h2>Your <span className="highlight">Chai Awaits</span></h2>
          
          <div className="visit-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>123 Chai Street, Melbourne VIC 3000</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <h4>Hours</h4>
                <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Contact</h4>
                <p>+61 123 456 789</p>
                <p>hello@mrchaiwala.com.au</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            {['Instagram', 'Facebook', 'TikTok'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                className="social-btn"
                whileHover={{ scale: 1.1, backgroundColor: '#D4A853' }}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="visit-map"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <span>Mr. Chaiwala</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🍵</span>
            <span className="logo-text">Mr. Chaiwala</span>
          </div>
          <p>Bringing the authentic taste of Indian chai to Australia since 2014.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#story">Our Story</a>
            <a href="#menu">Menu</a>
            <a href="#visit">Visit Us</a>
          </div>
          <div className="footer-column">
            <h4>Chai Types</h4>
            <a href="#">Masala Chai</a>
            <a href="#">Kesar Chai</a>
            <a href="#">Tandoori Chai</a>
            <a href="#">Kulhad Chai</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:hello@mrchaiwala.com.au">Email Us</a>
            <a href="tel:+61123456789">Call Us</a>
            <a href="#">Catering</a>
            <a href="#">Franchise</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Mr. Chaiwala. All rights reserved.</p>
        <p>Made with ❤️ and lots of chai</p>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Experience />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}

export default App
