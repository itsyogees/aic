"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import './Careers.scss'

const CareerPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleApplyClick = () => {
    window.open('mailto:ed@aic-ciic.ventures?subject=Application for Chief Executive Officer Position&body=Please find my resume attached.', '_blank')
  }

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="career-gradient-overlay"></div>
        <div className="career-hero-content">
          <div className="career-container">
            <div className={`career-text-content ${isVisible ? 'animate-in' : ''}`}>
              <h1 className="career-title">
                Careers
              </h1>
              <p className="career-subtitle">
                Join us in shaping the future of innovation and entrepreneurship
              </p>
              <div className="career-features">
                <div className="career-feature">
                  <span>Innovation Driven</span>
                </div>
                <div className="career-feature">
                  <span>Growth Focused</span>
                </div>
                <div className="career-feature">
                  <span>Impact Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <div className="career-content">
        <div className="career-container">
          {/* Position Header */}
          <PositionHeader />

          {/* Organization Info */}
          <OrganizationSection />

          {/* Key Responsibilities */}
          <ResponsibilitiesSection />

          {/* Eligibility */}
          <EligibilitySection />

          {/* Application CTA */}
          <ApplicationSection onApplyClick={handleApplyClick} />
        </div>
      </div>
    </div>
  )
}

// Position Header Component
const PositionHeader = () => {
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
    <div ref={sectionRef} className="position-header">
      <div className={`header-content ${isVisible ? 'animate-in' : ''}`}>
        <div className="position-badge">Hiring</div>
        <h2 className="position-title">Chief Executive Officer</h2>
        <div className="position-meta">
          <div className="meta-item">
            <span> Vandalur, Chengalpattu, Tamil Nadu</span>
          </div>
          <div className="meta-item">
            <span> Full-time</span>
          </div>
          <div className="meta-item">
            <span> Executive Level</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Organization Section Component
const OrganizationSection = () => {
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
    <section ref={sectionRef} className="org-section">
      <div className={`section-content ${isVisible ? 'animate-in' : ''}`}>
        <h3 className="section-title">About the Organization</h3>
        <div className="org-content">
          <p>
            <strong>B.S. Abdur Rahman Crescent Institute of Science & Technology (BSACIST)</strong>{' '}
            <Link 
              href="https://crescent.education/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link"
            >
              https://crescent.education/
            </Link>{' '}
            a premier institution with 41 years of academic excellence, offering a wide range of Undergraduate, Postgraduate, and Ph.D. programmes across 12 Schools. BSACIST has a proven track record of successfully operating the{' '}
            <strong>Crescent Innovation & Incubation Council (CIIC)</strong>,{' '}
            <Link 
              href="https://www.ciic.ventures/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link"
            >
              https://www.ciic.ventures/
            </Link>{' '}
            a dedicated innovation entity registered as a Section-8 not-for-profit organisation since 2019. Through CIIC, the institution has supported 134 startups across strategic sectors, including Life Sciences, Industry 4.0, and Aerospace & Defence Technology.
          </p>
          
          <p className="mt-2">
            Building on our existing strengths, BSACIST established <strong>Atal Incubation Centre – Crescent Innovation and Incubation Council (AIC-CIIC)</strong>, a Special Purpose Vehicle registered as Section-8 not-for-profit organisation focused on <em>"Smart & Clean Mobility"</em>. This initiative, supported by the Atal Innovation Mission of NITI Aayog, Government of India, aims to foster innovative startups and enable them to evolve into scalable and sustainable businesses.
          </p>
        </div>
      </div>
    </section>
  )
}

// Responsibilities Section Component
const ResponsibilitiesSection = () => {
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

  const responsibilities = [
    "Developing the strategic plan and roadmap for AIC-CIIC with well-defined deliverables, timelines and financials",
    "Leading operations & activities and overseeing budgetary spending through PFMS system",
    "Pioneering breakthrough incubation models that create measurable impact through innovative outreach",
    "Identifying and implementing disruptive best practices from national and international ecosystems",
    "Building AIC-CIIC as a groundbreaking, self-learning organization with new sustainability models",
    "Cultivating an unconventional mentor ecosystem with diverse, cross-industry perspectives",
    "Assembling an entrepreneurial team with creative problem-solving abilities",
    "Architecting novel pathways for transforming early-stage startups into growth-stage enterprises",
    "Forging unconventional partnerships with academia, R&D institutions, and industry",
    "Designing innovative access models to prototyping facilities and market opportunities",
    "Conceptualizing distinctive events that attract and inspire prospective incubatees",
    "Creating intelligent knowledge repositories leveraging technology in unprecedented ways",
    "Directing creation of cutting-edge digital and physical infrastructure",
    "Building a visionary team capable of challenging status quo and guiding startups"
  ]

  return (
    <section ref={sectionRef} className="responsibilities-section">
      <div className={`section-content ${isVisible ? 'animate-in' : ''}`}>
        <h3 className="section-title">Key Role & Responsibilities</h3>
        <div className="responsibilities-grid">
          {responsibilities.map((responsibility, index) => (
            <div 
              key={index} 
              className="responsibility-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon">→</div>
              <p>{responsibility}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Eligibility Section Component
const EligibilitySection = () => {
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

  const essentialRequirements = [
    "Demonstrated history of creating novel business models or pioneering programs",
    "Entrepreneurial experience with hands-on understanding of company formation and incubation",
    "Visionary perspective with courage to challenge established norms",
    "In-depth knowledge of Indian and global startup ecosystems",
    "Track record of driving innovation and transformation",
    "Ability to inspire teams toward breakthrough thinking"
  ]

  const lookingFor = [
    "Gets energized by white-space opportunities and creating new paradigms",
    "Has built something significant from ground zero",
    "Thrives on breaking conventional models rather than perfecting existing ones",
    "Can balance visionary creativity with practical execution",
    "Brings fresh perspectives that challenge traditional approaches"
  ]

  return (
    <section ref={sectionRef} className="eligibility-section">
      <div className={`section-content ${isVisible ? 'animate-in' : ''}`}>
        <h3 className="section-title">Eligibility & Requirements</h3>
        
        <div className="eligibility-content">
          <div className="requirements-grid">
            <div className="requirements-column">
              <h4 className="requirements-title">Essential Requirements</h4>
              <ul className="requirements-list">
                {essentialRequirements.map((req, index) => (
                  <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="requirements-column">
              <h4 className="requirements-title">We're Looking For Someone Who</h4>
              <ul className="requirements-list">
                {lookingFor.map((trait, index) => (
                  <li key={index} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mindset-note">
            <p>
              <strong>Note:</strong> While process excellence and systems thinking are valuable, we prioritize creative entrepreneurial vision and proven innovation leadership. If you're someone who has pioneered new approaches, built unprecedented models, or created something that didn't exist before – and you're ready to build a world-class incubation center that breaks the mold – we want to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Application Section Component
const ApplicationSection = ({ onApplyClick }) => {
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
    <section ref={sectionRef} className="application-section">
      <div className={`application-cta ${isVisible ? 'animate-in' : ''}`}>
        <h3 className="cta-title">Ready to Build Something Extraordinary?</h3>
        <p className="cta-subtitle">
          Join us in creating the future of innovation and entrepreneurship
        </p>
        <button 
          className="apply-button"
          onClick={onApplyClick}
        >
          Apply Now
          <span className="button-arrow">→</span>
        </button>
        <p className="application-note">
          Please email your resume to{' '}
          <Link 
            href="mailto:ed@aic-ciic.ventures"
            className="email-link"
          >
            ed@aic-ciic.ventures
          </Link>{' '}
          with an updated resume and the latest profile picture.
        </p>
      </div>
    </section>
  )
}

export default CareerPage