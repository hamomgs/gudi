import styled from 'styled-components'
import banner from '../../assets/img/combe-amarela.png'

export const SearchSection = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100%;
  width: 100%;
  height: 36vw;
  padding-left: 4.88vw;

  @media (max-width: 900px) {
    background-position: 0% center;
    background-size: cover;
    height: 50vw;
  }

  @media (max-width: 550px) {
    height: 66vw;
  }
`

export const Title = styled.h1`
  max-width: 29.7vw;
  padding: 7.6vw 0 1.36vw 0;
  font-size: 3.4vw;
  font-weight: 700;
  color: var(--blue);

  @media (max-width: 900px) {
    max-width: 54vw;
    padding: 9vw 0 3vw 0;
    font-size: 5.4vw;
  }

  @media (max-width: 550px) {
    max-width: 70vw;
    padding: 13vw 0 3vw 0;
    font-size: 7vw;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.66vw;

  @media (max-width: 900px) {
    gap: 3vw;
  }
`

export const Container = styled.div`
  width: 25.3vw;

  @media (max-width: 900px) {
    width: 38vw;
  }

  @media (max-width: 550px) {
    width: 51vw;
  }
`

export const Input = styled.input`
  max-width: 25.3vw;
  border-radius: 1.95vw;
  border: solid 2px transparent;
  padding: 0.87vw 1.95vw;
  font-weight: 400;
  font-size: 0.97vw;
  transition: 0.2s ease-in-out;

  &:focus {
    border-color: var(--blue);
  }

  @media (max-width: 900px) {
    max-width: 38vw;
    border-radius: 5vw;
    padding: 1.2vw 1.95vw;
    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    max-width: 51vw;
    padding: 2vw 1.95vw;
    font-size: 2.7vw;
  }
`

export const Button = styled.button`
  max-width: 10.7vw;
  height: 2.8vw;
  border: solid 2px transparent;
  border-radius: 1.4vw;
  color: #fff;
  font-family: 'Argentum Bold';
  letter-spacing: 3px;
  font-size: 0.97vw;
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--blue);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--blue);
    border-color: var(--blue);
    background-color: #fff;
  }

  @media (max-width: 900px) {
    max-width: 18vw;
    height: 5vw;
    border-radius: 4vw;
    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    max-width: 25vw;
    height: 6vw;
    font-size: 2.7vw;
  }
`