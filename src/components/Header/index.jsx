import React from 'react'
import * as S from './styles.jsx'
import logo from '../../assets/img/logo.png'

export default function Header() {
  return (
    <S.Header>
      <S.LogoContainer>
        <img src={logo} alt='logo' />
      </S.LogoContainer>

      <S.Container>
        <nav>
          <S.NavItems>
            <S.NavItem>Sobre</S.NavItem>
            <S.NavItem>Benefícios</S.NavItem>
            <S.NavItem>Contato</S.NavItem>
          </S.NavItems>
        </nav>
        <S.Button>AGENDAR</S.Button>
      </S.Container>
    </S.Header>
  )
}
