"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaRocket, FaUsers, FaHandshake, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import './About.scss'

export default function About() {
  return (
    <div className="about-page">
      <BannerSection />
      <WelcomeSection />
      <ServicesSection />
    </div>
  )
}

// Banner Section Component
const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="banner-background">
        <div className="banner-overlay"></div>
      </div>
      <div className="banner-content">
        <div className="banner-container">
          <div className="banner-text-content">
            <h1 className="banner-title">
              WELCOME TO <span className="highlight">AIC - CIIC</span>
            </h1>
        
          
          </div>
        </div>
      </div>
    </section>
  )
}

// Welcome Section Component
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-header">
          <h2 className="welcome-title">About AIC-CIIC</h2>
          <div className="title-underline"></div>
        </div>
        <div className="welcome-content">
          <div className="welcome-text">
            <p className="intro-text">
              Welcome to <strong>Atal Incubation Centre-Crescent Innovation and Incubation Council (AIC-CIIC)</strong>. 
              We are a dedicated platform fostering innovation and entrepreneurship in Clean Technology.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
              
                <div className="feature-text">
                  <h4>Clean Technology Focus</h4>
                  <p>Includes Recycling, Renewable Energy, Green Transportation, Electric Motors, and more</p>
                </div>
              </div>
              
              <div className="feature-item">
               
                <div className="feature-text">
                  <h4>Government Initiative</h4>
                  <p>Supported by Atal Innovation Mission, NITI Aayog, Government of India</p>
                </div>
              </div>
            </div>

            <p>
              Our mission is to provide a conducive ecosystem for startups, facilitating collaboration, 
              mentorship, funding, and access to industry resources in the Clean Technology sectors.
            </p>
            
            <p>
              We bring together entrepreneurs, industry partners, academic institutions, and government 
              agencies to accelerate the growth of innovative ideas and transform them into successful businesses.
            </p>
            
            <div className="mission-highlight">
              <p>
                Join our vibrant community of entrepreneurs, investors, industry experts, and researchers 
                working together to drive innovation and revolutionize the Clean Technology landscape.
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
      { threshold: 0.2 }
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
      icon: <FaRocket />,
      title: "Incubation Program",
      subtitle: "Our comprehensive incubation program offers startups access to mentoring, business development support, infrastructure, funding opportunities, and networking events.",
      delay: "0s"
    },
    {
      icon: <FaUsers />,
      title: "Co-Working Space",
      subtitle: "We provide a collaborative and inspiring workspace equipped with state-of-the-art facilities, enabling startups to work and grow in a dynamic environment.",
      delay: "0.1s"
    },
    {
      icon: <FaHandshake />,
      title: "Industry Partnership",
      subtitle: "We foster strategic partnerships with leading automotive companies, research institutions, and investors to create opportunities for startups, including pilot projects, technology validation, and market access.",
      delay: "0.2s"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events and Workshop",
      subtitle: "We organize workshops, seminars, and networking events, bringing together industry experts and entrepreneurs to share knowledge, exchange ideas, and explore emerging trends in the Smart & Clean Mobility sectors.",
      delay: "0.3s"
    }
  ]

  return (
    <section ref={sectionRef} className="services-about-section">
      <div className="services-container">
        <div className="section-header">
          <h3 className="mission-title">AIC CRESCENT INCUBATION COUNCIL</h3>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive support system for startups and innovators in clean technology
          </p>
        </div>

        <div className={`services-grid ${isVisible ? 'animate-in' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: service.delay }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.subtitle}</p>
              <div className="service-arrow">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}