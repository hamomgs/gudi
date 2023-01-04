import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.3vw;

  @media (max-width: 900px) {
    height: 8vw;
  }

  @media (max-width: 550px) {
    height: 20vw;
  }
`

export const OutsideClose = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: none;
  width: 100vw;
  height: 101vh;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 900px) {
    display: ${({ isOpen }) => isOpen ? 'initial' : 'none'};
  }
`

export const LogoContainer = styled.figure`
  height: 2.25vw;
  padding-left: 4.88vw;

  @media (max-width: 900px) {
    height: 4.25vw;
  }

  @media (max-width: 550px) {
    height: 9.25vw;
  }

  img {
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 6.4vw;
  padding-right: 3.9vw;
  transition: 0.4s ease-in-out;

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => isOpen ? '0vw' : '-50vw'};
    z-index: 2;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 100vh;
    padding: 90px 0 0 0;
    background-color: #fff;
  }

  @media (max-width: 550px) {
    width: 50vw;
    gap: 10vh;
  }
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.5vw;
  height: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 550px) {
    gap: 3vh;
  }
`

export const NavItem = styled.li`
  background: linear-gradient(0deg, var(--blue), var(--blue)) no-repeat;
  background-position: right bottom;
  background-size: 0 2px;
  padding-bottom: 2px;
  color: var(--blue);
  font-size: 1.02vw;
  cursor: pointer;
  transition: background-size 0.35s;
  
  
  &:where(:hover, :focus-visible) {
    background-size: 100% 2px;
    background-position-x: left;
  }

  @media (max-width: 900px) {
    font-size: 2vw;
  }

  @media (max-width: 550px) {
    font-size: 5.2vw;
  }
`

export const Button = styled.button`
  width: 11vw;
  height: 2.6vw;
  border-radius: 1.4vw;
  border: solid 2px transparent;
  color: #fff;
  letter-spacing: 3px;
  font-size: 1vw;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--blue);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--blue);
    border-color: var(--blue);
    background-color: transparent;
  }

  @media (max-width: 900px) {
    width: 15vw;
    height: 3.8vw;
    font-size: 1.5vw;
    border-radius: 2vw;
  }

  @media (max-width: 550px) {
    width: 38vw;
    height: 9.6vw;
    font-size: 4.2vw;
    border-radius: 5vw;
  }
`

export const HamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  color: var(--blue);
  margin-right: 3.9vw;
  font-size: 4vw;
  cursor: pointer;

  @media (max-width: 900px) {
    display: initial;
  }

  @media (max-width: 550px) {
    font-size: 9vw;
  }
`

export const Close = styled(IoClose)`
  position: absolute;
  top: 1.1vw;
  right: 3.2vw;
  display: none;
  color: var(--blue);
  font-size: 5.5vw;
  cursor: pointer;

  @media (max-width: 900px) {
    display: initial;
  }

  @media (max-width: 550px) {
    top: 4vw;
    font-size: 10.5vw;
  }
`