import React from 'react'
import * as S from './styles.jsx'

export default function ContactUs() {
  return (
    <S.ContactUsSection>
      <S.Title>Fale conosco</S.Title>
      <S.ContactForm>
        <S.Input type='email' placeholder='Diga o seu melhor email' />
        <S.Input type='text' placeholder='Assunto' />
        <S.Textarea placeholder='Escreva sua mensagem'></S.Textarea>
        <S.SendBtn>Enviar</S.SendBtn>
      </S.ContactForm>
    </S.ContactUsSection>
  )
}