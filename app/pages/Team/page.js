"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaUsers, FaRocket, FaHandshake } from 'react-icons/fa'
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
              Meet the passionate professionals driving innovation forward
            </p>
            <div className="team-features">
              <div className="team-feature">
                <FaUsers />
                <span>Expert Team</span>
              </div>
              <div className="team-feature">
                <FaRocket />
                <span>Innovation Driven</span>
              </div>
              <div className="team-feature">
                <FaHandshake />
                <span>Collaborative</span>
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
          <div className="image-caption">
            <h3>Our Dedicated Team</h3>
            <p>Working together to transform ideas into reality</p>
          </div>
        </div>
      </div>
    </section>
  )
}