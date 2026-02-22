import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const HomePage = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="hero" id="home">
      <motion.div className="hero-bg" style={{ y }}>
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/Kv1vQyrEOyA?autoplay=1&mute=1&loop=1&playlist=Kv1vQyrEOyA&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <div className="hero-overlay"></div>
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>✨ Authentic Indian Chai & Street Food</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="hero-title-line">Welcome to</span>
          <span className="hero-title-main">Mr. Chaiwala</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Creating the perfect cup of chai that brings people together 
          and sparks moments of warmth and connection.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 168, 83, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.a>
          <Link to="/menu">
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: "50+", label: "Menu Items" },
            { number: "5PM", label: "Open Daily" },
            { number: "5AM", label: "Late Night Chai" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HomePage
