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
`

export const Title = styled.h1`
  max-width: 29.7vw;
  padding-top: 7.6vw;
  font-size: 3.4vw;
  font-weight: 700;
  color: #005bd5;
  padding-bottom: 1.36vw;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.66vw;
`

export const Input = styled.input`
  max-width: 25.3vw;
  border-radius: 1.95vw;
  border: solid 3px transparent;
  padding: 0.87vw 1.95vw;
  font-weight: 400;
  font-size: 0.97vw;
  transition: 0.2s ease-in-out;

  &:focus {
    border-color: #005bd5;
  }
`

export const Button = styled.button`
  max-width: 10.7vw;
  height: 2.8vw;
  border: solid 2px transparent;
  border-radius: 1.4vw;
  color: #fff;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 0.97vw;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #005bd5;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #005bd5;
    border-color: #005bd5;
    background-color: #fff;
  }
`