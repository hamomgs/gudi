import React, { useState } from 'react'
import SelectState from '../SelectState/index.jsx'
import * as S from './styles.jsx'

export default function SchedulingModal({ setIsOpen, setSelectedState }) {
  const [finalMessage, setFinalMessage] = useState(false)
  
  const handleOutSideClick = e => {
    if(e.target.id === 'modal') {
      setIsOpen(false)
    }
  }

  return (
    <S.OutsideContainer id='modal' onClick={e => handleOutSideClick(e)}>
      <S.ModalContainer finalMessage={finalMessage}>
      <S.CloseBtn onClick={() => setIsOpen(false)} title='Fechar' />
      {!finalMessage &&
        <>
          <S.Title>Agendamento</S.Title>
          <S.Container>
            <h3>Origem:</h3>
            <SelectState border='solid 1px var(--dark-gray)' setSelectedState={setSelectedState} />
          </S.Container>

          <S.Container>
            <h3>Destino:</h3>
            <SelectState border='solid 1px var(--dark-gray)' setSelectedState={setSelectedState} />
          </S.Container>

          <S.Container>
            <h3>Partida:</h3>
            <S.DateInput type='date' />
          </S.Container>

          <S.Container>
            <h3>Assentos:</h3>
            <S.Seats type ='number' placeholder='0' min='0' max='8' />
          </S.Container>

          <S.BtnContainer>
            <S.CancelBtn onClick={() => setIsOpen(false)}>Cancelar</S.CancelBtn>
            <S.ConfirmBtn onClick={() => setFinalMessage(true)}>Agendar</S.ConfirmBtn>
          </S.BtnContainer>
        </>
      }

        {finalMessage &&
          <S.ThankContainer>
            <h3>Quase pronto...</h3>
            <p>Em instantes, você receberá um email com os próximos passos a serem tomados.</p>
          </S.ThankContainer>
        }
      </S.ModalContainer>
    </S.OutsideContainer>
  )
}