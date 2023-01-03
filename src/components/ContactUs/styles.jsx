import styled from 'styled-components'

export const ContactUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.17vw;
  height: 37.59vw;
  margin-top: 5.66vw;
  background-color: var(--blue);
`

export const Title = styled.h2`
  font-family: 'Argentum Bold';
  font-size: 3.41vw;
  color: #fff;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.68vw;
`

export const Input = styled.input`
  width: 32.61vw;
  height: 3.02vw;
  padding: 0.97vw 1.36vw;
  border: solid 2px var(--blue);
  border-radius: 1.5vw;
  font-family: 'Argentum Light';
  font-size: 1vw;

  &::placeholder {
    color: var(--gray);
  }
`

export const Textarea = styled.textarea`
  max-width: 32.61vw;
  width: 100%;
  height: 6.64vw;
  padding: 0.97vw 1.36vw;
  resize: none;
  border: solid 2px var(--blue);
  border-radius: 1.5vw;
  font-family: 'Argentum Light';
  font-size: 1vw;

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0 1.5vw 0 1.5vw;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
  }

  &::placeholder {
    color: var(--gray);
  }
`

export const SendBtn = styled.button`
  width: 9.17vw;
  height: 2.83vw;
  margin-top: 0.48vw;
  border: solid 1px #fff;
  border-radius: 1.4vw;
  letter-spacing: 3px;
  font-size: 1vw;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
  background-color: transparent;

  &:hover {
    color: var(--blue);
    background-color: #fff;
  }
`
