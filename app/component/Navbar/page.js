"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.scss'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = (scrollY / documentHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <Image width={200} height={200} src="/assets/nav-logo.jpg" alt="AIC Logo" />
          </Link>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Reading Progress Bar - MOVED TO BOTTOM */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  )
}

export default Navbar