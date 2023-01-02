import React from 'react'
import * as S from './styles.jsx'
import firstImg from '../../assets/img/casal-por-do-sol.png'
import secondImg from '../../assets/img/grupo-por-do-sol.png'
import thirdImg from '../../assets/img/grupo-pscina.png'
import RJ from '../../assets/img/rj.png'
import RO from '../../assets/img/rio-das-ostras.png'
import CN from '../../assets/img/caldas-novas.png'
import AM from '../../assets/img/amazonia.png'

export default function TravelSection() {
  return (
    <S.TravelSection>
      <S.Picture img={firstImg}></S.Picture>
      <S.AboutBox>
        <S.Container>
          <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
          <S.Title width='90%'>O clima perfeito, no lugar perfeito</S.Title>
          <S.Description>
            Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos
            não tem preço.
          </S.Description>
          <S.Button>Agendar</S.Button>
        </S.Container>
      </S.AboutBox>
      
      <S.AboutBox isWhite='true'>
        <S.Container>
          <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
          <S.Title width='90%'>Curta uma nova vibe entre amigos</S.Title>
          <S.Description>
            Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos.
            Conheça nossos <span>Planos Multi</span>.
          </S.Description>
          <S.Button>Agendar</S.Button>
        </S.Container>
      </S.AboutBox>
      <S.Picture img={secondImg}></S.Picture>

      <S.Picture img={thirdImg}></S.Picture>
      <S.AboutBox>
        <S.Container>
          <S.LittleTitle><S.Line></S.Line> Viagens Nacionais</S.LittleTitle>
          <S.Title fontSize='3.35vw'>Algumas experiências são inexplicáveis</S.Title>
          <S.Description>
            Conheça as fontes termais de <span>Caldas Novas, Goiás</span>. Águas quentes,
            num clima sereno, relaxante e natural.
          </S.Description>
          <S.Button>Agendar</S.Button>
        </S.Container>
      </S.AboutBox>

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
