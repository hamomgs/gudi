import React from 'react'
import * as S from './styles.jsx'

export default function SearchModal({ setIsOpen, state, setSearchModalOpen }) {
  const handleOutSideClick = e => {
    if(e.target.id === 'search-modal') {
      setSearchModalOpen(false)
    }
  }

  return (
    <S.ModalContainer id='search-modal' onClick={e => handleOutSideClick(e)}>
      <S.Container>

        <S.Message>As melhores passagens para {state} foram encontradas! Deseja agendar sua viagem?</S.Message>
        <S.BtnContainer>
          <S.CancelBtn onClick={() => setSearchModalOpen(false)} title='Cancelar'>Cancelar</S.CancelBtn>
          <S.ConfirmBtn onClick={() => {setSearchModalOpen(false); setIsOpen(true);}} title='Agendar'>Agendar</S.ConfirmBtn>
        </S.BtnContainer>
      </S.Container>
    </S.ModalContainer>
  )
}