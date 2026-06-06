import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct WhatsApp message
    const waMessage = `Hello Levy, my name is ${name} (${email}).%0A%0A${message}`;
    const waURL = `https://wa.me/254718690760?text=${waMessage}`;
    
    // Open WhatsApp
    window.open(waURL, '_blank');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Get In Touch</div>
          <h2>Let's Talk About Your Project</h2>
          <p>Have an idea or a project in mind? Drop me a message below, and it will be sent directly to my WhatsApp.</p>
        </div>

        <div className="contact-wrap card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I would like to discuss..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary contact-submit">
              Send via WhatsApp &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
