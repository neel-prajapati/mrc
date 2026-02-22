import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const VisitPage = () => {
  const [ref, isInView] = useInView(0.1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - redirect to email
    const subject = encodeURIComponent('Inquiry from Mr. Chaiwala Website')
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`)
    window.location.href = `mailto:Bhagyeshthakar@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-wrapper">
      {/* Hero Banner */}
      <section className="page-hero visit-hero">
        <div className="page-hero-overlay"></div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Visit Us</span>
          <h1>Your <span className="highlight">Chai Awaits</span></h1>
          <p>Open 5PM to 5AM daily - Adelaide's late night chai destination</p>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="locations-section" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Our Location</span>
          <h2>Find <span className="highlight">Mr. Chaiwala</span></h2>
        </motion.div>

        <div className="locations-grid single-location">
          <motion.div
            className="location-card primary"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <span className="flagship-badge">Adelaide's Late Night Chai</span>
            <div className="location-map-preview">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2!2d138.5693!3d-34.9076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU0JzI3LjQiUyAxMzjCsDM0JzA5LjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen="" 
                loading="lazy"
                title="Mr. Chaiwala Location"
              ></iframe>
            </div>
            <div className="location-info">
              <h3>Hindmarsh</h3>
              <div className="info-row">
                <span className="info-icon">📍</span>
                <p>162 Port Rd, Hindmarsh SA 5007</p>
              </div>
              <div className="info-row">
                <span className="info-icon">📞</span>
                <p>0422 372 222</p>
              </div>
              <div className="info-row">
                <span className="info-icon">⏰</span>
                <p>Open Daily: 5PM - 5AM</p>
              </div>
              <motion.a 
                href="https://www.google.com/maps/dir//162+Port+Rd,+Hindmarsh+SA+5007"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary location-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Order Online CTA */}
        <motion.div 
          className="order-cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Can't make it in? Order online!</h3>
          <div className="order-buttons">
            <motion.a 
              href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.a>
            <motion.a 
              href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah/loyalty-card"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Loyalty Program
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="booking-section">
        <div className="booking-container">
          <motion.div 
            className="booking-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Get in Touch</span>
            <h2>Contact <span className="highlight">Us</span></h2>
            <p>Have a question or inquiry? Send us a message and we'll get back to you!</p>
            
            <div className="booking-features">
              <div className="booking-feature">
                <span>🌙</span>
                <div>
                  <h4>Late Night Chai</h4>
                  <p>Open 5PM to 5AM every day</p>
                </div>
              </div>
              <div className="booking-feature">
                <span>🥡</span>
                <div>
                  <h4>Takeaway Available</h4>
                  <p>Order online or walk in</p>
                </div>
              </div>
              <div className="booking-feature">
                <span>🎉</span>
                <div>
                  <h4>Catering Available</h4>
                  <p>Bring Mr. Chaiwala to your event</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="booking-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Phone</label>
                <input 
                  type="tel" 
                  placeholder="0XXX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group full-width">
                <label>Message</label>
                <textarea 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  required
                />
              </div>
              <motion.button 
                type="submit"
                className="cta-button primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Connect With Us</span>
          <h2>Contact <span className="highlight">Details</span></h2>
        </motion.div>

        <div className="contact-methods">
          {[
            { icon: "📧", label: "Email", value: "Bhagyeshthakar@gmail.com", link: "mailto:Bhagyeshthakar@gmail.com" },
            { icon: "📞", label: "Phone", value: "0422 372 222", link: "tel:0422372222" },
            { icon: "📍", label: "Address", value: "162 Port Rd, Hindmarsh SA 5007", link: "https://www.google.com/maps/dir//162+Port+Rd,+Hindmarsh+SA+5007" },
          ].map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-method"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <span className="contact-icon">{method.icon}</span>
              <h4>{method.label}</h4>
              <p>{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="social-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>Follow Us</h3>
          <div className="social-links-large">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100091952810140"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-large"
              whileHover={{ scale: 1.1, backgroundColor: '#D4A853' }}
              whileTap={{ scale: 0.95 }}
            >
              Facebook
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default VisitPage
