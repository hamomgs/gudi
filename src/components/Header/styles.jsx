import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.3vw;
`

export const OutsideClose = styled.div`
  position: absolute;
  top: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 900px) {
    display: ${({ isOpen }) => isOpen ? 'initial' : 'none'};
  }
`

export const LogoContainer = styled.figure`
  height: 2.25vw;
  padding-left: 4.88vw;

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
    right: ${({ isOpen }) => isOpen ? '0vw' : '-30vw'};
    z-index: 2;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 100vh;
    padding: 90px 0 0 0;
    background-color: #fff;
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
`

export const HamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  color: var(--blue);
  margin-right: 3.9vw;
  font-size: 2.6vw;

  @media (max-width: 900px) {
    display: initial;
  }
`

export const Close = styled(IoClose)`
  position: absolute;
  top: 3px;
  right: 3.4vw;
  display: none;
  color: var(--blue);
  font-size: 3.5vw;

  @media (max-width: 900px) {
    display: initial;
  }
`