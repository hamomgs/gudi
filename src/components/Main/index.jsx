import React, { useEffect, useState } from 'react'
import ContactUs from '../ContactUs/index.jsx'
import Experiences from '../Experiences/index.jsx'
import SchedulingModal from '../SchedulingModal/index.jsx'
import Search from '../Search/index.jsx'
import SearchModal from '../SearchModal/index.jsx'
import TravelSection from '../TravelSection/index.jsx'

export default function Main({ isOpen, setIsOpen }) {
  const [selectedState, setSelectedState] = useState('')
  
  const [isSearchModalOpen, setSearchModalOpen] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else { 
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <main>
      <Search selectedState={selectedState} setSelectedState={setSelectedState} setSearchModalOpen={setSearchModalOpen} />
      <TravelSection setIsOpen={setIsOpen} />
      <Experiences />
      <ContactUs />
      {isOpen && 
        <SchedulingModal isOpen={isOpen} setIsOpen={setIsOpen} selectedState={selectedState} setSelectedState={setSelectedState} />
      }
      {isSearchModalOpen &&
        <SearchModal selectedState={selectedState} setSearchModalOpen={setSearchModalOpen} setIsOpen={setIsOpen} state={selectedState} />
      }
    </main>
  )
}
