import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const StoryPage = () => {
  const [ref, isInView] = useInView(0.2)

  return (
    <div className="page-wrapper">
      {/* Hero Banner */}
      <section className="page-hero story-hero">
        <div className="page-hero-overlay"></div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Our Story</span>
          <h1>The <span className="highlight">Mr. Chaiwala</span> Story</h1>
          <p>Where tradition and flavour come together</p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="story story-page-section" ref={ref}>
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
              <span className="badge-year">Open</span>
              <span className="badge-number">5PM-5AM</span>
            </div>
          </motion.div>

          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Our Passion</span>
            <h2>Bringing <span className="highlight">Indian Street Food</span> to Adelaide</h2>
            
            <p className="story-lead">
              At Mr. Chaiwala, we are passionate about serving the best of Indian street food 
              along with our expertly brewed chai, made with the finest tea leaves and a blend 
              of carefully selected spices.
            </p>
            
            <p>
              Beyond our signature chai, we offer a variety of delicious dishes including authentic 
              Parathas, comforting Maggi noodles, crispy Samosas, flavorful Sandwiches, and much more. 
              Whether you're craving a quick snack or a full meal, we've got something for everyone.
            </p>

            <div className="story-features">
              {[
                { icon: "🍵", title: "Expert Chai", desc: "Finest tea leaves & selected spices" },
                { icon: "🇮🇳", title: "Street Food", desc: "Authentic Indian flavours" },
                { icon: "🌙", title: "Late Night", desc: "Open 5PM to 5AM daily" },
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

      {/* What We Offer Section */}
      <section className="timeline-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">What We Offer</span>
          <h2>Adelaide's <span className="highlight">Late Night</span> Chai Destination</h2>
        </motion.div>

        <div className="values-grid">
          {[
            { icon: "☕", title: "Signature Chai", desc: "From classic Chai Cutting to our full-bodied Chai Full, every cup is brewed to perfection" },
            { icon: "🥪", title: "Street Snacks", desc: "Vadapav, Samosa Pav, Dabeli, Bun Maska and more authentic Indian street food" },
            { icon: "🍝", title: "Comfort Food", desc: "Hot Maggi noodles, Pasta, Parathas, and crispy French Fries" },
            { icon: "🥤", title: "Cool Drinks", desc: "Refreshing Lassi, Milkshakes, Cold Coffee, and specialty sodas" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Our Commitment</span>
          <h2>Supporting <span className="highlight">Local</span></h2>
        </motion.div>

        <div className="values-grid">
          {[
            { icon: "🤝", title: "Local Hiring", desc: "We are committed to hiring locals and building our Adelaide community" },
            { icon: "🌾", title: "Local Producers", desc: "We partner with local producers to source the freshest ingredients" },
            { icon: "❤️", title: "Community First", desc: "Building connections and serving our neighbourhood one cup at a time" },
            { icon: "✨", title: "Quality Always", desc: "Only the finest ingredients make it into every dish we serve" },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StoryPage
