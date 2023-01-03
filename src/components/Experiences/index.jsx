import React from 'react'
import * as S from './styles.jsx'
import baby from '../../assets/img/bebe-no-alto.png'
import beach from '../../assets/img/grupo-praia.png'
import dog from '../../assets/img/cao-e-tutor.png'
import selfie from '../../assets/img/selfie.png'
import bike from '../../assets/img/mulher-bike.png'
import women from '../../assets/img/grupo-mulheres.png'
import route from '../../assets/icons/rota.png'
import road from '../../assets/icons/estrada.png'
import coconut from '../../assets/icons/coco.png'
import menu from '../../assets/icons/cardapio.png'


export default function Experiences() {
  return (
    <S.ExperiencesSection>
      <S.LittleTitle>use a hashtag #brasilisverigudi</S.LittleTitle>
      <S.Title>Nosso mural de Experiências</S.Title>
      <S.PhotosContainer>
        <S.Photo src={baby} alt='Homem jogando bebê pro alto.' />
        <S.Photo src={beach} alt='Sete pessoas pulando em cima de rochas na praia.' />
        <S.Photo src={dog} alt='Homem tirando selfie com cachorro.' />
        <S.Photo src={selfie} alt='Homem de ocúlos e boné tirando selfie.' />
        <S.Photo src={bike} alt='Mulher com roupas de ciclismo tirando selfie com bicicleta.' />
        <S.Photo src={women} alt='Quatro mulheres tirando selfie.' />
      </S.PhotosContainer>

      <S.CardsContainer>
        <S.Card bgColor='var(--light-gray)'>
          <S.CardIcon src={route} alt='Icone de rota.' width='5.86vw' />
          <S.CardDescription color='var(--blue)'>
            O melhor do Brasil
          </S.CardDescription>
        </S.Card>

        <S.Card bgColor='var(--blue)'>
          <S.CardIcon src={road} alt='Icone de estrada.' width='6.07vw' />
          <S.CardDescription color='#fff'>
            Cidades mais frequentadas
          </S.CardDescription>
        </S.Card>

        <S.Card bgColor='var(--light-gray)'>
          <S.CardIcon src={coconut} alt='Icone de coco verde.' width='4.46vw' />
          <S.CardDescription color='var(--blue)'>
            Pontos turísticos
          </S.CardDescription>
        </S.Card>

        <S.Card bgColor='var(--blue)'>
          <S.CardIcon src={menu} alt='Icone de cardamio.' width='5.76vw' />
          <S.CardDescription color='#fff'>
            Restaurantes
          </S.CardDescription>
        </S.Card>
      </S.CardsContainer>
    </S.ExperiencesSection>
  )
}