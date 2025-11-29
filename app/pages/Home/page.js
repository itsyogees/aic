"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaUserTie, FaMoneyBillWave, FaChartLine, FaCogs, FaPhone, FaHeadphones, FaLightbulb, FaSync } from 'react-icons/fa'
import './Home.scss'

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

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
          <TypingHeroTitle />
          <Link href="/pages/About" className="btn-primary hero-cta">
            <span>Get Started</span>
            <div className="hover-effect"></div>
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <section ref={imageRef} className="image-section">
        <div className={`image-container ${isImageVisible ? 'animate-image' : ''}`}>
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
  );
}

// Typing Hero Title Component
const TypingHeroTitle = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const rotatingTexts = [
    "AIC"
  ];

  const staticPart = "Crescent Innovation & Incubation Council";

  useEffect(() => {
    const currentText = rotatingTexts[currentTextIndex];
    
    if (!isPaused) {
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          // Typing forward
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Finished typing, pause then start deleting
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, 2000); // Pause for 3 seconds after typing
          }
        } else {
          // Deleting backward
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
            }, 300); // Short pause before starting next text
          }
        }
      }, isDeleting ? 100 : 500); // Typing and deletion speeds

      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, isPaused, charIndex, currentTextIndex, rotatingTexts]);

  return (
    <h1 className="hero-title">
      <span className="static-part">
        Welcome to <span className='big'> {displayText}</span>
      </span>
      <span className="typing-container">
        <span className="typing-text">{staticPart}</span>
        <span className="cursor">|</span>
      </span>
    </h1>
  );
};

 
const AboutMobilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-mobility-section">
      {/* Animated Dark Circular Shapes */}
      <div className="animated-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
  
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        
      </div>

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
                  &quot;Zero Emission… Stable…&quot;
                </div>
              </div>

              <div className="mobility-card clean-mobility">
                <h3 className="card-title">Clean Mobility</h3>
                <p className="card-description">
                  All modes of transportation that use alternative fuels or advanced technology to reduce greenhouse gas emissions.
                </p>
                <div className="card-quote">
                  &quot;Faster… Safer… Efficient…&quot;
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
  );
};
 
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
  ];

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
  );
};

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
  ];

  return (
    <section ref={sectionRef} className="contact-section">
      {/* Animated Background Shapes */}
      <div className="contact-shapes">
        <div className="contact-shape shape-1"></div>
        <div className="contact-shape shape-2"></div>
        <div className="contact-shape shape-3"></div>
        <div className="contact-shape shape-4"></div>
        <div className="contact-shape shape-5"></div>
        <div className="contact-shape shape-6"></div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className={`contact-info ${isVisible ? 'animate-in-left' : ''}`}>
            <div className="contact-header">
              <h2 className="contact-title">For Incubation Support</h2>
              <h3 className="contact-subtitle">Contact us</h3>
              
              <div className="contact-phone">
                <div className="phone-pulse">
                  <FaPhone className="phone-icon" />
                </div>
                <a href="tel:+919884282809" className="phone-number">
                  +91 98842 82809
                </a>
              </div>
            </div>

            <div className="contact-image">
              <div className="image-frame">
                <Image 
                  src="/assets/home-contact.jpg" 
                  alt="Contact AIC-CIIC"
                  width={400}
                  height={200}
                  className="contact-img"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Tips Section */}
          <div className={`contact-tips ${isVisible ? 'animate-in-right' : ''}`}>
            <div className="tips-section">
              <div className="tips-header">
                <h4 className="tips-title">Tips for a perfect contact</h4>
                <div className="tips-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dot"></div>
                </div>
              </div>
              <div className="tips-list">
                {tips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-number-wrapper">
                      <div className="tip-number">{tip.number}</div>
                      <div className="number-glow"></div>
                    </div>
                    <div className="tip-content">
                      <div className="tip-header">
                        <div className="tip-icon-wrapper">
                          {tip.icon}
                        </div>
                        <h5 className="tip-title">{tip.title}</h5>
                      </div>
                      <p className="tip-description">{tip.description}</p>
                    </div>
                    <div className="tip-hover-effect"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Map at Bottom */}
        <div className={`contact-map ${isVisible ? 'animate-in-bottom' : ''}`}>
          <div className="map-container">
            <div className="map-overlay"></div>
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
  );
};