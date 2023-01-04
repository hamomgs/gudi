import React, { useState } from 'react'
import * as S from './styles.jsx'
import logo from '../../assets/img/logo.png'

export default function Header({ setOpen }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Header>
      <S.OutsideClose isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}></S.OutsideClose>
      <S.LogoContainer>
        <img src={logo} alt='logo' />
      </S.LogoContainer>

      <S.HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      <S.Container isOpen={isOpen}>
        <S.Close onClick={() => setIsOpen(!isOpen)} />
        <nav>
          <S.NavItems>
            <S.NavItem>Sobre</S.NavItem>
            <S.NavItem>Benefícios</S.NavItem>
            <S.NavItem>Contato</S.NavItem>
          </S.NavItems>
        </nav>
        <S.Button onClick={() => setOpen(true)}>AGENDAR</S.Button>
      </S.Container>
    </S.Header>
  )
}
