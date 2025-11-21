"use client"
import React from 'react'
import Image from 'next/image'
import './Team.scss'

export default function Team() {
  return (
    <div className="team-page">
      <TeamSection/>
      <section className="team-section-image">
        <div className="team-image-container">
          <Image 
            src="/assets/team.jpg" 
            alt="Our Team"
            width={1200}
            height={800}
            className="team-image"
            priority
          />
        </div>
      </section>
    </div>
  )
}

 
const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-gradient-overlay"></div>
      <div className="team-content">
        <div className="team-container">
          <div className="team-text-content">
            <h1 className="team-title">
              OUR TEAM
            </h1>
            <p className="team-subtitle">
              Meet the passionate professionals driving innovation forward
            </p>
          </div>
        </div>
      </div> 
    </section>
  )
}