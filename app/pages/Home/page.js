"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaUserTie, FaMoneyBillWave, FaChartLine, FaCogs, FaPhone, FaHeadphones, FaLightbulb, FaSync } from 'react-icons/fa'
import './Home.scss'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="video-background">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="background-video"
          >
            <source src="/assets/home-pg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to AIC - Crescent Innovation & Incubation Council
          </h1>
          
          <Link href="/pages/About" className="btn-primary hero-cta">
            Get Started
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <div className="image-container">
          <Image 
            src="/assets/home2.png" 
            alt="AIC Innovation Center"
            width={1200}
            height={600}
            className="centered-image"
            priority
          />
        </div>
      </section>

      {/* Combined About & Mobility Section */}
      <AboutMobilitySection />

      {/* Services Section */}
      <ServicesSection />

           {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

// Combined About & Mobility Section Component
const AboutMobilitySection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="about-mobility-section">
      <div className="container">
        <div className="content-grid">
          {/* Left Side - Mobility Cards */}
          <div className={`mobility-content ${isVisible ? 'animate-in-left' : ''}`}>
            <div className="mobility-cards">
              <div className="mobility-card smart-mobility">
                <h3 className="card-title">Smart Mobility</h3>
                <p className="card-description">
                  Technology driven intelligent transport system (Road, Air & Water) that aims to transport people and goods around the globe.
                </p>
                <div className="card-quote">
                  " Zero Emission… Stable… "
                </div>
              </div>

              <div className="mobility-card clean-mobility">
                <h3 className="card-title">Clean Mobility</h3>
                <p className="card-description">
                  All modes of transportation that use alternative fuels or advanced technology to reduce greenhouse gas emissions.
                </p>
                <div className="card-quote">
                  " Faster… Safer… Efficient… "
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content with Heading */}
          <div className={`about-content ${isVisible ? 'animate-in-right' : ''}`}>
            <div className="about-header">
              <h2 className="section-subtitle-small">AIC - CIIC</h2>
              <h3 className="section-subtitle">About Us</h3>
            </div>
            <div className="about-text">
              <p>
                Welcome to Atal Incubation Centre-Crescent Innovation and Incubation Council (AIC-CIIC). 
                We are a dedicated platform fostering innovation and entrepreneurship in the Clean Technology 
                includes a broad range of technology related to Recycling, Renewable Energy, Information Technology, 
                Green Transportation, Electric Motors, Green Chemistry, Lighting and Grey Water etc., is an initiative 
                under the Atal Innovation Mission, NITI Aayog by the Government of India.
              </p>
              <p>
                We aim to nurture and support startups in the Clean Technology sectors.
              </p>
              <p>
                Our mission is to provide a conducive ecosystem for startups, facilitating collaboration, 
                mentorship, funding, and access to industry resources.
              </p>
              <p>
                We bring together entrepreneurs, industry partners, academic institutions, and government 
                agencies to accelerate the growth of innovative ideas and transform them into successful businesses.
              </p>
              <p>
                Join our vibrant community of entrepreneurs, investors, industry experts, and researchers 
                working together to drive innovation and revolutionize the Smart & Clean Mobility landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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

  const services = [
    {
      icon: <FaUserTie />,
      title: "Mentor",
      description: "Expert guidance and mentorship from industry leaders and experienced professionals"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Money",
      description: "Funding support and investment opportunities for promising startups"
    },
    {
      icon: <FaChartLine />,
      title: "Market",
      description: "Market access and business development support to scale your venture"
    },
    {
      icon: <FaCogs />,
      title: "Machineries",
      description: "Access to state-of-the-art infrastructure and equipment"
    }
  ]

  return (
    <section ref={sectionRef} className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive support system to nurture and grow your innovative ideas
          </p>
        </div>
        
        <div className={`services-grid ${isVisible ? 'animate-in' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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

  const tips = [
    {
      number: "01",
      icon: <FaHeadphones />,
      title: "Active Listening",
      description: "Active listening, followed by clarifying questions, ensures a complete understanding."
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Clear Instructions",
      description: "Provide clear and concise instructions or assistance to resolve the issue as efficiently as possible."
    },
    {
      number: "03",
      icon: <FaSync />,
      title: "Continuous Follow-up",
      description: "Continuously follow up to ensure that the issue is fully resolved and promptly offer any further assistance."
    }
  ]

  return (
    <section ref={sectionRef} className="contact-section">
      <div className="container">
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className={`contact-info ${isVisible ? 'animate-in-left' : ''}`}>
            <div className="contact-header">
              <h2 className="contact-title">For Incubation Support</h2>
              <h3 className="contact-subtitle">Contact us</h3>
              
              <div className="contact-phone">
                <FaPhone className="phone-icon" />
                <a href="tel:+919884282809" className="phone-number">
                  +91 98842 82809
                </a>
              </div>
            </div>

            <div className="contact-image">
              <Image 
                src="/assets/home-contact.jpg" 
                alt="Contact AIC-CIIC"
                width={400} // Reduced from 500
                height={200} // Reduced from 250
                className="contact-img"
              />
            </div>
          </div>

          {/* Right Side - Tips Section */}
          <div className={`contact-tips ${isVisible ? 'animate-in-right' : ''}`}>
            <div className="tips-section">
              <h4 className="tips-title">Tips for a perfect contact</h4>
              <div className="tips-list">
                {tips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number">{tip.number}</div>
                    <div className="tip-content">
                      <div className="tip-header">
                        <h5 className="tip-title">{tip.title}</h5>
                      </div>
                      <p className="tip-description">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Map at Bottom */}
        <div className={`contact-map ${isVisible ? 'animate-in-bottom' : ''}`}>
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
        </div>
      </div>
    </section>
  )
}