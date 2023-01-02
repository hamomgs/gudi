import React from 'react'
import ContactUs from '../ContactUs/index.jsx'
import Experiences from '../Experiences/index.jsx'
import Search from '../Search/index.jsx'
import TravelSection from '../TravelSection/index.jsx'
// import * as S from './styles.jsx'

export default function Main() {
  return (
    <main>
      <Search />
      <TravelSection />
      <Experiences />
      <ContactUs />
    </main>
  )
}
