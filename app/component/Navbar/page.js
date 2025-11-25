"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import './Navbar.scss'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = (scrollY / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/pages/About' },
    { name: 'Team', path: '/pages/Team' },
    { name: 'Careers', path: '/pages/Careers' },
    { name: 'Contact Us', path: '/pages/Contact' }
  ]

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const handleLinkClick = (e) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" onClick={handleLinkClick}>
              <Image 
                width={180} 
                height={60} 
                src="/assets/nav-logo.jpg" 
                alt="AIC CIIC Logo" 
                priority
              />
            </Link>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-menu-inner">
              {navLinks.map((link, index) => {
                return React.createElement(
                  Link,
                  {
                    key: link.path,
                    href: link.path,
                    className: `nav-link ${isActive(link.path) ? 'active' : ''}`,
                    onClick: handleLinkClick,
                    style: { '--link-index': index }
                  },
                  React.createElement('span', { className: 'nav-link-text' }, link.name),
                  React.createElement('span', { className: 'nav-link-underline' })
                )
              })}
            </div>
          </div>

          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        
        <div 
          className="reading-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </nav>

      {isMobileMenuOpen && React.createElement('div', {
        className: 'mobile-overlay',
        onClick: closeMobileMenu,
        'aria-hidden': 'true'
      })}
    </>
  )
}

export default Navbar