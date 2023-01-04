import React from 'react'
import * as S from './styles.jsx'
import SelectState from '../SelectState/index.jsx'

export default function Search({ selectedState, setSelectedState, setSearchModalOpen }) {
  const openModal = () => {
    if (selectedState !== '') {
      setSearchModalOpen(true)
    }
  }
  
  return (
   <S.SearchSection>
      <S.Title>Para qual estado você deseja ir?</S.Title>
      <S.Form onSubmit={e => e.preventDefault()}>
        <S.Container>
          <SelectState setSelectedState={setSelectedState} />
        </S.Container>
        <S.Button onClick={() => openModal()} title='Buscar'>Buscar</S.Button>
      </S.Form>
   </S.SearchSection>
  )
}
