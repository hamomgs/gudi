import styled from 'styled-components'
import banner from '../../assets/img/combe-amarela.png'

export const SearchSection = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 36.20vw;
  padding-left: 4.88vw;
`

export const Title = styled.h1`
  max-width: 29.7vw;
  padding-top: 7.6vw;
  font-size: 3.4vw;
  font-family: 'Argentum Bold';
  color: #005bd5;
  margin-bottom: 1.36vw;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.66vw;
`

export const Input = styled.input`
  max-width: 25.3vw;
  border-radius: 1.95vw;
  border: none;
  padding: 0.87vw 1.95vw;
  font-family: 'Argentum Light';
  font-size: 0.97vw;
`

export const Button = styled.button`
  max-width: 10.7vw;
  height: 2.8vw;
  border: none;
  border-radius: 1.4vw;
  color: #fff;
  font-family: 'Argentum Bold';
  letter-spacing: 3px;
  font-size: 0.97vw;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #005bd5;

  &:hover {
    /* opacity: 0.9; */
  }
`