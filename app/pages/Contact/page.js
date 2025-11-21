"use client"
import React from 'react'
import Link from 'next/link'
import './Contact.scss'

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-gradient-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-container">
            <div className="contact-text-content">
              <h1 className="contact-title">
                Contact Us
              </h1>
              <p className="contact-subtitle">
                Get in touch with us for any queries or support
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-content">
        <div className="contact-container">
          {/* Contact Information */}
          <section className="contact-info-section fade-in">
            <div className="contact-info-grid">
              {/* Helpline Card */}
              <div className="contact-card">
               
                <div className="card-content">
                  <h3 className="card-title">Dedicated Helpline For Startups</h3>
                  <p className="card-detail">+91 98842 82809</p>
                  <p className="card-note">On Weekdays, 10 am to 6 pm</p>
                </div>
              </div>

              {/* Incubation Support Card */}
              <div className="contact-card">
              
                <div className="card-content">
                  <h3 className="card-title">For Incubation Support</h3>
                  <p className="card-detail">Contact us</p>
                  <Link 
                    href="mailto:ed@aic-ciic.ventures"
                    className="contact-link"
                  >
                    Get Support
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Reach Us Section */}
          <section className="reach-section fade-in">
            <h2 className="section-title">Reach Us</h2>
            <div className="reach-content">
              <div className="reach-grid">
                {/* Address */}
                <div className="reach-item">
                  <div className="reach-number">01</div>
                  <div className="reach-details">
                    <h4 className="reach-title">Address</h4>
                    <p className="reach-text">
                      V3CP+R3J, Peerakankaranai,<br />
                      Tamil Nadu 603210
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="reach-item">
                  <div className="reach-number">02</div>
                  <div className="reach-details">
                    <h4 className="reach-title">Contact Details</h4>
                    <div className="contact-details">
                      <p className="reach-text">
                        <strong>Email:</strong>{' '}
                        <Link 
                          href="mailto:ed@aic-ciic.ventures"
                          className="contact-link"
                        >
                          ed@aic-ciic.ventures
                        </Link>
                      </p>
                      <p className="reach-text">
                        <strong>Phone:</strong>{' '}
                        <Link 
                          href="tel:04422759200"
                          className="contact-link"
                        >
                          044-22759200
                        </Link>{' '}
                        Extn: 485 & 486
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="map-section fade-in">
            <h2 className="section-title">Our Location</h2>
            <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.214626448593!2d80.085151!3d12.87208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70015762707%3A0xf59e18ce3c1bec5f!2sAIC-CIIC!5e0!3m2!1sen!2sus!4v1763711668597!5m2!1sen!2sus" 
              width="100%" 
              height="100%"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AIC-CIIC Location"
            />
            </div>
          </section>

         
        </div>
      </div>
    </div>
  )
}

export default ContactPage