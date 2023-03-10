import React from 'react'
import * as S from './styles.jsx'
import firstImg from '../../assets/img/casal-por-do-sol.png'
import secondImg from '../../assets/img/grupo-por-do-sol.png'
import thirdImg from '../../assets/img/grupo-pscina.png'
import RJ from '../../assets/img/rj.png'
import RO from '../../assets/img/rio-das-ostras.png'
import CN from '../../assets/img/caldas-novas.png'
import AM from '../../assets/img/amazonia.png'

export default function TravelSection({ setIsOpen }) {
  return (
    <S.TravelSection>
      <S.Container>
        <S.Picture img={firstImg}></S.Picture>
        <S.AboutBox>
          <S.InfoBox>
            <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
            <S.Title width='90%'>O clima perfeito, no lugar perfeito</S.Title>
            <S.Description>
              Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos
              não tem preço.
            </S.Description>
            <S.Button onClick={() => setIsOpen(true)} title='Agendar'>Agendar</S.Button>
          </S.InfoBox>
        </S.AboutBox>
        
        <S.AboutBox isWhite='true'>
          <S.InfoBox>
            <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
            <S.Title width='90%'>Curta uma nova vibe entre amigos</S.Title>
            <S.Description>
              Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos.
              Conheça nossos <span>Planos Multi</span>.
            </S.Description>
            <S.Button onClick={() => setIsOpen(true)} title='Agendar'>Agendar</S.Button>
          </S.InfoBox>
        </S.AboutBox>
        <S.Picture img={secondImg}></S.Picture>

        <S.Picture img={thirdImg}></S.Picture>
        <S.AboutBox>
          <S.InfoBox>
            <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
            <S.Title fontSize='3.35vw' fontSizeR='6.4vw'>Algumas experiências são inexplicáveis</S.Title>
            <S.Description>
              Conheça as fontes termais de <span>Caldas Novas, Goiás</span>. Águas quentes,
              num clima sereno, relaxante e natural.
            </S.Description>
            <S.Button onClick={() => setIsOpen(true)} title='Agendar'>Agendar</S.Button>
          </S.InfoBox>
        </S.AboutBox>
      </S.Container>

      <S.StatesContainer>
        <S.StateBox img={RJ}>
          <S.StateBtn>Rio de Janeiro</S.StateBtn>
        </S.StateBox>

        <S.StateBox img={RO}>
          <S.StateBtn>Rio das Ostras</S.StateBtn>
        </S.StateBox>

        <S.StateBox img={CN}>
          <S.StateBtn>Caldas Novas</S.StateBtn>
        </S.StateBox>

        <S.StateBox img={AM}>
          <S.StateBtn>Amazônia</S.StateBtn>
        </S.StateBox>
      </S.StatesContainer>
    </S.TravelSection>
  )
}
