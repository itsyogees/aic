"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaUsers, FaRocket, FaHandshake, FaArrowRight } from 'react-icons/fa'
import './Team.scss'

export default function Team() {
  return (
    <div className="team-page">
      <TeamSection />
      <TeamImageSection /> 
    </div>
  )
}

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="team-section">
      <div className="team-background">
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      <div className="team-gradient-overlay"></div>
      <div className="team-content">
        <div className="team-container">
          <div className={`team-text-content ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="team-title">
              OUR <span className="highlight">TEAM</span>
            </h1>
            <p className="team-subtitle">
              Meet the passionate professionals driving innovation forward at AIC-CIIC
            </p>
            <div className="team-features">
              <div className="team-feature">
                <FaUsers className="feature-svg" />
                <span>Expert Team</span>
              </div>
              <div className="team-feature">
                <FaRocket className="feature-svg" />
                <span>Innovation Driven</span>
              </div>
              <div className="team-feature">
                <FaHandshake className="feature-svg" />
                <span>Collaborative Spirit</span>
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

const TeamImageSection = () => {
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
    <section ref={sectionRef} className="team-section-image">
      <div className="team-image-wrapper">
        <div className={`team-image-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-overlay"></div>
          <Image 
            src="/assets/team.jpg" 
            alt="Our Team - AIC CIIC"
            width={1200}
            height={800}
            className="team-image"
            priority
          />
          <div className="image-content">
            <div className="image-caption">
              <h3>Our Dedicated Team</h3>
              <p>Working together to transform innovative ideas into reality</p>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  )
}

const TeamValuesSection = () => {
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

  const values = [
    {
      icon: <FaUsers />,
      title: "Collaborative Excellence",
      description: "We believe in the power of teamwork and collaboration to achieve extraordinary results.",
      color: "#4FC3F7"
    },
    {
      icon: <FaRocket />,
      title: "Innovation Driven",
      description: "Constantly pushing boundaries and exploring new frontiers in clean technology.",
      color: "#29B6F6"
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Focused",
      description: "Building strong relationships with startups, industry partners, and government agencies.",
      color: "#0288D1"
    }
  ]

  return (
    <section ref={sectionRef} className="team-values-section">
      <div className="values-container">
        <div className={`values-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="values-title">Our Team Values</h2>
          <div className="title-underline"></div>
          <p className="values-subtitle">
            The principles that guide our team's success and innovation
          </p>
        </div>

        <div className={`values-grid ${isVisible ? 'animate-in' : ''}`}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className="value-icon-wrapper" 
                style={{ '--icon-color': value.color }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-arrow">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}