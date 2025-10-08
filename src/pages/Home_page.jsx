import React from 'react'
import Hero from '../sections/Hero_section'
import AboutSection from '../sections/About'
import ProgrammesSection from '../sections/Programs'
import UpcomingProgrammes from '../sections/Upcoming_pragrammes'
import NewsletterSection from '../sections/Newsletter'
import Footer from '../components/Footer'

export const Home_page = () => {
  return (
    <section>
        <Hero />
        <AboutSection />
        <ProgrammesSection />
        <UpcomingProgrammes />
        <NewsletterSection />
        <Footer />
    </section>
  )
}
