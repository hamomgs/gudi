import React from 'react'
import * as S from './styles.jsx'
import logo from '../../assets/img/logo.png'

export default function Footer() {
  return (
    <S.Footer>
      <S.Container width='12.4vw'>
        <S.Logo src={logo} alt='Logo Gudi, O bom da vida é viver.' />
        <S.LinksContainer>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Sobre nós'>Sobre nós</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Mural de memórias'>Mural de memórias</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Eventos Gudi'>Eventos Gudi</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Nosso blog'>Nosso blog</a>
          </li>
        </S.LinksContainer>
      </S.Container>

      <S.Container>
        <S.Title>Contato</S.Title>
        <S.LinksContainer>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Chat Virtual'>Chat Virtual</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='SAC Online'>SAC Online</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Ouvidoria'>Ouvidoria</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='FAQ'>FAQ</a>
          </li>
        </S.LinksContainer>
      </S.Container>

      <S.Container>
        <S.Title>Benefícios</S.Title>
        <S.LinksContainer>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Conta digital Gudi'>Conta digital Gudi</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Viaje com Milhas'>Viaje com Milhas</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='C6 Átomos'>C6 Átomos</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='ID Jovem'>ID Jovem</a>
          </li>
        </S.LinksContainer>
      </S.Container>

      <S.Container>
        <S.Title>Lugares</S.Title>
        <S.LinksContainer>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='O melhor do Brasil'>O melhor do Brasil</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Cidades frequentes'>Cidades frequentes</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Pontos turísticos'>Pontos turísticos</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Restaurantes'>Restaurantes</a>
          </li>
        </S.LinksContainer>
      </S.Container>

      <S.Container>
        <S.Title>Curiosidades</S.Title>
        <S.LinksContainer>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Cultura e tradições'>Cultura e tradições</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Pratos típicos'>Pratos típicos</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Mitos brasileiros'>Mitos brasileiros</a>
          </li>
          <li>
            <a href='https://gudi-hamomgs.vercel.app/' title='Carnaval'>Carnaval</a>
          </li>
        </S.LinksContainer>
      </S.Container>
    </S.Footer>
  )
}