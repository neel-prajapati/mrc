import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ExperiencePage = () => {
  const [ref, isInView] = useInView(0.1)

  const experiences = [
    { title: "Cozy Ambiance", desc: "Warm lighting, comfortable seating, and the aroma of fresh chai create the perfect escape from the everyday hustle.", icon: "✨", image: "ambiance" },
    { title: "Live Chai Making", desc: "Watch our skilled chai-walas craft your perfect cup using traditional techniques passed down through generations.", icon: "👨‍🍳", image: "chaimaking" },
    { title: "Cultural Events", desc: "Join us for regular poetry nights, live music sessions, chai talks, and cultural celebrations.", icon: "🎭", image: "events" },
    { title: "Private Events", desc: "Host your special moments with our catering services - from intimate gatherings to corporate events.", icon: "🎉", image: "private" },
  ]

  const testimonials = [
    {
      text: "The best chai I've ever had outside of India. The Masala Chai here transports me straight to the streets of Mumbai. Absolutely magical!",
      author: "Raj Sharma",
      role: "Regular Customer",
      initials: "RS",
      rating: 5
    },
    {
      text: "A hidden gem in Melbourne! The ambiance is incredible, and every cup of chai is made with so much love and care.",
      author: "Sarah Mitchell",
      role: "Food Blogger",
      initials: "SM",
      rating: 5
    },
    {
      text: "We hosted our engagement party here and it was perfect. The chai and snacks were a massive hit with all our guests!",
      author: "Priya & James",
      role: "Event Hosts",
      initials: "PJ",
      rating: 5
    },
  ]

  const galleryItems = [
    { id: 1, title: "Our Cafe", size: "large" },
    { id: 2, title: "Chai Making", size: "small" },
    { id: 3, title: "Spices", size: "small" },
    { id: 4, title: "Events", size: "medium" },
    { id: 5, title: "Community", size: "medium" },
    { id: 6, title: "Food", size: "small" },
  ]

  return (
    <div className="page-wrapper">
      {/* Hero Banner */}
      <section className="page-hero experience-hero">
        <div className="page-hero-overlay"></div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">The Experience</span>
          <h1>More Than Just <span className="highlight">Chai</span></h1>
          <p>Immerse yourself in the complete Mr. Chaiwala experience</p>
        </motion.div>
      </section>

      {/* Experience Cards */}
      <section className="experience experience-page-section" ref={ref}>
        <div className="experience-grid-large">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="experience-card-large"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="exp-card-image">
                <div className="exp-card-overlay"></div>
              </div>
              <div className="exp-card-content">
                <div className="exp-icon-large">{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Gallery</span>
          <h2>Glimpses of <span className="highlight">Mr. Chaiwala</span></h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`gallery-item gallery-${item.size}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Testimonials</span>
          <h2>What Our <span className="highlight">Customers</span> Say</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="testimonial-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="experience-cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Experience <span className="highlight">Mr. Chaiwala</span>?</h2>
          <p>Book a table or inquire about private events</p>
          <div className="cta-buttons">
            <motion.button 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.button>
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan an Event
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ExperiencePage
