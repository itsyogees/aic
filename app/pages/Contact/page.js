"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaLightbulb, FaArrowRight } from 'react-icons/fa'
import './Contact.scss'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <HeroSection />
      
      <div className="contact-content">
        <div className="contact-container">
          <ContactInfoSection />
          <ReachSection />
          <MapSection />
        </div>
      </div>
    </div>
  )
}

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="contact-hero">
      <div className="hero-background">
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
      </div>
      <div className="contact-gradient-overlay"></div>
      <div className="contact-hero-content">
        <div className="contact-container">
          <div className={`contact-text-content ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="contact-title">
              <span className="highlight">Contact</span> Us
            </h1>
            <p className="contact-subtitle">
              Get in touch with us for any queries or support
            </p>
            <div className="contact-features">
              <div className="contact-feature">
                <FaHeadset className="feature-svg" />
                <span>24/7 Support</span>
              </div>
              <div className="contact-feature">
                <FaPhone className="feature-svg" />
                <span>Quick Response</span>
              </div>
              <div className="contact-feature">
                <FaLightbulb className="feature-svg" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

// Contact Info Section Component
const ContactInfoSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="contact-info-section">
      <div className="section-content">
        <div className="contact-info-grid">
          <div 
            className={`contact-card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="card-icon-wrapper">
              <div className="icon-background"></div>
              <FaPhone className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Dedicated Helpline For Startups</h3>
              <Link href="tel:+919884282809" className="card-detail">
                +91 98842 82809
              </Link>
              <p className="card-note">
                <FaClock className="clock-icon" />
                On Weekdays, 10 am to 6 pm
              </p>
              <Link 
                href="tel:+919884282809"
                className="contact-link"
              >
                <span>Call Now</span>
                <FaArrowRight className="link-arrow" />
              </Link>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          <div 
            className={`contact-card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="card-icon-wrapper">
              <div className="icon-background"></div>
              <FaEnvelope className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">For Incubation Support</h3>
              <Link href="mailto:ed@aic-ciic.ventures" className="card-detail">
                ed@aic-ciic.ventures
              </Link>
              <p className="card-note">
                <FaEnvelope className="clock-icon" />
                We respond within 24 hours
              </p>
              <Link 
                href="mailto:ed@aic-ciic.ventures"
                className="contact-link"
              >
                <span>Send Email</span>
                <FaArrowRight className="link-arrow" />
              </Link>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Reach Us Section Component
const ReachSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="reach-section">
      <div className="section-content">
        <h2 className="section-title">Reach Us</h2>
        <div className="reach-content">
          <div className="reach-grid">
            <div 
              className={`reach-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="reach-number">01</div>
              <div className="reach-details">
                <h4 className="reach-title">Address</h4>
                <p className="reach-text">
                  V3CP+R3J, Peerakankaranai,<br />
                  Tamil Nadu 603210
                </p>
                <div className="address-link">
                  <FaMapMarkerAlt className="address-icon" />
                  <Link 
                    href="https://maps.google.com/?q=AIC-CIIC+Vandalur+Chengalpattu+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-link"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>
              <div className="reach-hover-effect"></div>
            </div>

            <div 
              className={`reach-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="reach-number">02</div>
              <div className="reach-details">
                <h4 className="reach-title">Contact Details</h4>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaEnvelope className="contact-item-icon" />
                    <div className="reach-text">
                      <strong>Email:</strong>{' '}
                      <Link 
                        href="mailto:ed@aic-ciic.ventures"
                        className="reach-link"
                      >
                        ed@aic-ciic.ventures
                      </Link>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-item-icon" />
                    <div className="reach-text">
                      <strong>Phone:</strong>{' '}
                      <Link 
                        href="tel:04422759200"
                        className="reach-link"
                      >
                        044-22759200
                      </Link>
                      {' '}Extn: 485 & 486
                    </div>
                  </div>
                </div>
              </div>
              <div className="reach-hover-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Map Section Component
const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="map-section">
      <div className="section-content">
        <h2 className="section-title">Our Location</h2>
        <div className={`map-wrapper ${isVisible ? 'animate-in' : ''}`}>
          <div className="map-container">
            <div className="map-overlay"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.214626448593!2d80.085151!3d12.87208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70015762707%3A0xf59e18ce3c1bec5f!2sAIC-CIIC!5e0!3m2!1sen!2sus!4v1763711668597!5m2!1sen!2sus" 
              width="100%" 
              height="100%"
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AIC-CIIC Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage