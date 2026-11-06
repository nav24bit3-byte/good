import React from "react";

const products = [
  {
    number: "01",
    title: "Coir Fibre",
    description: "Natural coconut fibre for a wide range of industrial, agricultural and household uses.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "02",
    title: "Coir Rope",
    description: "Strong and versatile natural-fibre rope for practical everyday applications.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "03",
    title: "Coco Peat",
    description: "A useful coconut-based growing medium for gardening and horticultural applications.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85"
  }
];

function App() {
  const email = "your-email@example.com"; // Replace with your company email
  const phone = "+91 XXXXX XXXXX"; // Replace with your company phone number

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Natural coir products. Responsible choices.</span>
          <span>Call us: {phone}</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="SV Coir Mill home">
            <span className="brand-mark">SV</span>
            <span><strong>SV COIR MILL</strong><small>NATURAL FIBRE PRODUCTS</small></span>
          </a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#process">Our Process</a>
            <a className="nav-contact" href="#contact">Contact Us <span>↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <p className="eyebrow light">ROOTED IN NATURE · MADE WITH CARE</p>
            <h1>Natural coir.<br /><em>Stronger possibilities.</em></h1>
            <p className="hero-copy">Welcome to SV Coir Mill. We are building a better tomorrow with useful, versatile products made from natural coconut fibre.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">Explore Products <span>↗</span></a>
              <a className="text-link" href="#about">Discover our company <span>→</span></a>
            </div>
          </div>
          <div className="hero-note"><span className="note-line"></span> NATURAL MATERIALS. PRACTICAL SOLUTIONS.</div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">ABOUT SV COIR MILL</p>
              <h2>From coconut husk<br />to <em>everyday value.</em></h2>
            </div>
            <div className="intro-text">
              <p>SV Coir Mill is a coir-products company focused on the value of natural coconut fibre. Our aim is to provide dependable products and build lasting relationships with customers.</p>
              <p className="muted">Add your company history, location, experience and key strengths here to tell visitors more about your business.</p>
              <a className="under-link" href="#contact">Know more about us <span>→</span></a>
            </div>
          </div>
          <div className="container stats">
            <div><strong>100%</strong><span>Natural raw material</span></div>
            <div><strong>Quality</strong><span>Focused production</span></div>
            <div><strong>Reliable</strong><span>Customer relationships</span></div>
          </div>
        </section>

        <section className="products section" id="products">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow light">WHAT WE OFFER</p><h2>Our <em>products</em></h2></div>
              <p>Explore natural coir product categories. Replace or add items to match the products SV Coir Mill manufactures and sells.</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.number}>
                  <div className="product-image"><img src={product.image} alt={product.title} /></div>
                  <div className="product-info">
                    <span className="product-number">{product.number}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a href="#contact" aria-label={`Enquire about ${product.title}`}>Enquire now <span>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container process-grid">
            <div className="process-image">
              <img src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=1100&q=85" alt="Natural fibres and materials" />
              <div className="image-label">NATURAL BY NATURE</div>
            </div>
            <div className="process-content">
              <p className="eyebrow">HOW IT COMES TO LIFE</p>
              <h2>A thoughtful<br /><em>production journey.</em></h2>
              <p className="muted">Show customers how your coir products are made. The stages below are a sample and should be updated to reflect your actual mill process.</p>
              <ol className="steps">
                <li><span>01</span><div><strong>Raw material selection</strong><small>Selecting suitable coconut husk and fibre.</small></div></li>
                <li><span>02</span><div><strong>Fibre processing</strong><small>Preparing and processing the fibre.</small></div></li>
                <li><span>03</span><div><strong>Product making</strong><small>Making products to customer requirements.</small></div></li>
                <li><span>04</span><div><strong>Quality check & packing</strong><small>Checking and preparing orders for delivery.</small></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div><p className="eyebrow light">LET'S WORK TOGETHER</p><h2>Looking for quality<br /><em>coir products?</em></h2></div>
            <a className="btn btn-light" href="#contact">Talk to our team <span>↗</span></a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>Let's start a<br /><em>conversation.</em></h2>
              <p className="muted">Contact SV Coir Mill for product details, orders and business enquiries.</p>
              <div className="contact-details">
                <div><small>PHONE</small><strong>{phone}</strong></div>
                <div><small>EMAIL</small><strong>{email}</strong></div>
                <div><small>ADDRESS</small><strong>Add your mill address here</strong></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const subject = encodeURIComponent("Website enquiry - SV Coir Mill");
              const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`);
              window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            }}>
              <label>Your name<input name="name" placeholder="Enter your name" required /></label>
              <label>Phone number<input name="phone" placeholder="Enter your phone number" /></label>
              <label>Email address<input name="email" type="email" placeholder="Enter your email" required /></label>
              <label>Your message<textarea name="message" rows="4" placeholder="How can we help you?" required /></label>
              <button className="btn btn-primary" type="submit">Send enquiry <span>↗</span></button>
              <small className="form-note">This form opens your email app. Add your real company email in the code before publishing.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">SV</span><span><strong>SV COIR MILL</strong><small>NATURAL FIBRE PRODUCTS</small></span></a>
          <p>Natural coir products for a more resourceful tomorrow.</p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
        <div className="container copyright"><span>© {new Date().getFullYear()} SV Coir Mill. All rights reserved.</span><span>Designed with care.</span></div>
      </footer>
    </>
  );
}

export default App;
