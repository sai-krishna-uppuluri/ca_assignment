import React from 'react'

import Navbar from '@/components/navbar'
import HomeSection from '@/components/HomeSection'
import ServiceSection from '@/components/service_section'
import AboutSection from '@/components/AboutSection'
import BusinessSection from '@/components/BusinessSection'
import SupportSection from '@/components/SupportSection'
import KnowledgeSection from '@/components/KnowledgeSection'
import ClientSection from '@/components/ClientSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

function Home() {
  return (
    <div >
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <BusinessSection />
      <SupportSection />
      <KnowledgeSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Home
