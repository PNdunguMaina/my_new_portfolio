import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Container } from './LayoutStyles'
import { Section } from '../styles/GlobalComponents'


export const Layout = ({children}) => {
  return (
    <Container>
      <Router>
        <Header />
      </Router>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>

      <Projects />
      <Technologies />
      <Timeline />
      <Footer />
    </Container>
  )
}
