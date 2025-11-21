"use client"
import React, { useState, useEffect } from 'react'
import './Footer.scss'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-text">
              Copyright © Atal Incubation Center – Crescent Innovation and Incubation Council | All Right Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {isVisible && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 20L12 4M12 4L5 11M12 4L19 11" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default Footer