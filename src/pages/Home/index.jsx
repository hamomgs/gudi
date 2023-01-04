import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setOpen={setIsOpen} />
      <Main isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </>
  )
}