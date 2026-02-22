import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const MenuPage = () => {
  const [ref, isInView] = useInView(0.1)
  const [activeCategory, setActiveCategory] = useState('chai')

  const menuItems = {
    chai: [
      { name: "Chai Cutting", price: "$3.50", desc: "Half cup of intense, perfectly brewed chai", popular: true },
      { name: "Chai Full", price: "$5.50", desc: "Full cup of our signature spiced chai", popular: true },
      { name: "Coffee", price: "$4.50", desc: "Rich Indian-style coffee", popular: false },
      { name: "Bournvita", price: "$5.50", desc: "Classic malted chocolate drink", popular: false },
      { name: "Green Tea", price: "$3.50", desc: "Light and refreshing green tea", popular: false },
      { name: "Mango Lassi", price: "$7.50", desc: "Creamy yogurt smoothie with fresh mango", popular: true },
      { name: "Sweet Lassi", price: "$5.50", desc: "Traditional sweetened yogurt drink", popular: false },
      { name: "Salt Lassi", price: "$6.00", desc: "Refreshing savory lassi", popular: false },
    ],
    cold: [
      { name: "Cold Coffee", price: "$7.50", desc: "Iced coffee blend with cream", popular: true },
      { name: "Iced Tea", price: "$4.50", desc: "Chilled tea with refreshing flavors", popular: false },
      { name: "Badam Milk", price: "$7.50", desc: "Almond-infused milk drink", popular: true },
      { name: "Milk Shake", price: "$7.50", desc: "Creamy classic milkshake", popular: false },
      { name: "Oreo Shake", price: "$10.50", desc: "Loaded with Oreo cookie goodness", popular: true },
      { name: "Kitkat Shake", price: "$10.50", desc: "Crispy wafer chocolate shake", popular: true },
      { name: "Ferrero Rocher Shake", price: "$10.50", desc: "Premium hazelnut chocolate shake", popular: true },
      { name: "Lemon Soda", price: "$5.50", desc: "Fresh lemon with fizzy soda", popular: false },
    ],
    snacks: [
      { name: "Vadapav", price: "$6.00", desc: "Mumbai's famous spiced potato burger", popular: true },
      { name: "Samosa Pav", price: "$6.00", desc: "Crispy samosa served in a bun", popular: true },
      { name: "Dabeli", price: "$6.00", desc: "Sweet & spicy potato in a bun", popular: true },
      { name: "Bun Maska", price: "$4.50", desc: "Soft bun with butter - chai's best friend", popular: true },
      { name: "Cheese Vadapav", price: "$8.50", desc: "Vadapav loaded with melted cheese", popular: true },
      { name: "Samosa", price: "$4.50", desc: "Crispy pastry with spiced potato filling", popular: false },
      { name: "Bread Pakoda", price: "$6.00", desc: "Deep-fried bread fritters", popular: false },
      { name: "Roasted Corn", price: "$8.50", desc: "Spiced roasted corn on the cob", popular: false },
    ],
    mains: [
      { name: "Plain Maggi", price: "$7.50", desc: "Classic instant noodles done right", popular: true },
      { name: "Cheese Maggi", price: "$10.50", desc: "Loaded with melted cheese", popular: true },
      { name: "Tandoori Maggi", price: "$10.50", desc: "Spiced with tandoori flavors", popular: true },
      { name: "Maggi Super Special", price: "$12.50", desc: "Our ultimate loaded Maggi", popular: true },
      { name: "Grilled Sandwich", price: "$4.50", desc: "Classic grilled veg sandwich", popular: false },
      { name: "Paneer Makhani Sandwich", price: "$8.50", desc: "Rich paneer in makhani sauce", popular: true },
      { name: "Tandoori Paneer Sandwich", price: "$9.50", desc: "Spiced tandoori paneer filling", popular: true },
      { name: "Chili Paneer Sandwich", price: "$9.50", desc: "Indo-Chinese style paneer", popular: false },
    ],
    sides: [
      { name: "Plain Fries", price: "$7.00", desc: "Crispy golden French fries", popular: true },
      { name: "Peri Peri Fries", price: "$9.00", desc: "Spiced with peri peri seasoning", popular: true },
      { name: "Cheese Fries", price: "$10.50", desc: "Loaded with melted cheese", popular: true },
      { name: "Manchurian Fries", price: "$9.00", desc: "Indo-Chinese style fries", popular: false },
      { name: "Roti", price: "$3.00", desc: "Fresh wheat flatbread", popular: false },
      { name: "Paratha", price: "$6.00", desc: "Layered flaky flatbread", popular: false },
      { name: "Butter Paratha", price: "$8.00", desc: "Paratha with butter", popular: true },
      { name: "Paneer Paratha", price: "$10.00", desc: "Stuffed with spiced paneer", popular: true },
    ],
  }

  const categories = [
    { id: 'chai', label: 'Hot & Cold Drinks', icon: '🍵' },
    { id: 'cold', label: 'Shakes & Sodas', icon: '🥤' },
    { id: 'snacks', label: 'Street Snacks', icon: '🥟' },
    { id: 'mains', label: 'Maggi & Sandwiches', icon: '🍝' },
    { id: 'sides', label: 'Fries & Roti', icon: '🍟' },
  ]

  return (
    <div className="page-wrapper">
      {/* Hero Banner */}
      <section className="page-hero menu-hero">
        <div className="page-hero-overlay"></div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Our Menu</span>
          <h1>Crafted with <span className="highlight">Passion</span></h1>
          <p>Discover our carefully curated selection of authentic Indian flavors</p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="menu menu-page-section" ref={ref}>
        <div className="menu-bg-pattern"></div>
        
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

        {/* Order Online CTA */}
        <motion.div 
          className="menu-download"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Ready to order? Get your favorite chai and snacks delivered!</p>
          <motion.a 
            href="https://orders.restoplus.com/restaurants/f7lrph252/stores/178srvnlah"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Online Now
          </motion.a>
        </motion.div>
      </section>

      {/* Dietary Info */}
      <section className="dietary-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Good to Know</span>
          <h2>Dietary <span className="highlight">Information</span></h2>
        </motion.div>

        <div className="dietary-grid">
          {[
            { icon: "🌱", label: "Vegetarian Options", desc: "Most of our menu is vegetarian-friendly" },
            { icon: "🥛", label: "Dairy Alternatives", desc: "Oat, almond, and soy milk available" },
            { icon: "🌾", label: "Gluten-Free", desc: "Ask about our gluten-free options" },
            { icon: "🥜", label: "Allergen Info", desc: "Please inform us of any allergies" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="dietary-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="dietary-icon">{item.icon}</span>
              <h4>{item.label}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MenuPage
