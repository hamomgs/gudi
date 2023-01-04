import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'

export const OutsideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  width: ${({ finalMessage }) => finalMessage ? '50%' : '90%'};
  height: 90%;
  padding: ${({ finalMessage }) => finalMessage && '1vw 5vw'};
  border-radius: 15px;
  background-color: #fff;

  @media (max-width: 550px) {
    width: 90%;
  }
`

export const CloseBtn = styled(IoClose)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  font-size: 40px;
  color: var(--dark-blue);
  cursor: pointer;
`

export const Title = styled.h2`
  position: absolute;
  top: 40px;
  text-transform: uppercase;
  color: var(--blue);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  width: 40%;

  @media (max-width: 550px) {
    width: 85%;
  }
`

export const DateInput = styled.input`
  width: 100%;
  margin-left: 0.3vw;
  padding: 0.5vw 1vw;
  border-radius: 5vw;
  border: solid 1px var(--dark-gray);
  font-family: 'Argentum Light';
  font-size: clamp(15px, 1.2vw, 20px);
  cursor: pointer;

  @media (max-width: 550px) {
    margin-left: 1vw;
    padding: 2vw;
  }
`

export const Seats = styled.input`
  width: 100%;
  margin-left: -0.7vw;
  padding: 0.5vw 1vw;
  border-radius: 5vw;
  border: solid 1px var(--dark-gray);
  font-family: 'Argentum Light';
  font-size: clamp(15px, 1.2vw, 20px);

  @media (max-width: 550px) {
    margin-left: -2vw;
    padding: 2vw;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  width: 100%;

  button {
    max-width: 250px;
    max-height: 50px;
    width: 20vw;
    height: 4vw;
    color: #fff;
    border: solid 2px #fff;
    border-radius: 5vw;
    font-family: 'Argentum Bold';
    font-size: clamp(15px, 1.2vw, 20px);
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
    padding-top: 20vw;

    button {
      width: 100%;
      height: 9vw;
    }
  }
`

export const CancelBtn = styled.button`
  background-color: #dc3545;

  &:hover {
    color: #dc3545;
    border-color: #dc3545;
    background-color: transparent;
  }
`

export const ConfirmBtn = styled.button`
  background-color: var(--blue);

  &:hover {
    color: var(--blue);
    border-color: var(--blue);
    background-color: transparent;
  }
`

export const ThankContainer = styled.div`
  font-size: clamp(30px, 4vw, 800px);
  text-align: center;
  color: var(--dark-gray);
  
  p {
    padding-top: 60px;
    font-size: clamp(25px, 2vw, 800px);
  }
`