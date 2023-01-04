import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  max-width: 700px;
  width: 60%;
  height: 60%;
  padding: 1vw 1.2vw;
  border-radius: 15px;
  background-color: #fff;

  button {
    max-width: 250px;
    max-height: 50px;
    width: 20vw;
    height: 4vw;
    color: #fff;
    border: solid 2px #fff;
    border-radius: 5vw;
    font-family: 'Argentum Bold';
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  @media (max-width: 550px) {
    width: 90%;
    height: 50%;

    button {
      width: 100%;
      height: 9vw;
    }
  }
`

export const Message = styled.h3`
  font-family: 'Argentum Regular';
  font-size: clamp(20px, 2.6vw, 30px);
  text-align: center;
  color: var(--blue);

  @media (max-width: 550px) {
    max-width: 90%;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 4vw;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
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