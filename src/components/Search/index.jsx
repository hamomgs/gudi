import React from 'react'
import * as S from './styles.jsx'

export default function Search() {
  return (
   <S.SearchSection>
      <S.Title>Para qual estado você deseja ir?</S.Title>
      <S.Form onSubmit={e => e.preventDefault()}>
        <S.Input type='text' placeholder='Pesquisar' />
        <S.Button>Buscar</S.Button>
      </S.Form>
   </S.SearchSection>
  )
}
