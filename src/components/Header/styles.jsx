import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.3vw;
`

export const LogoContainer = styled.figure`
  height: 2.25vw;
  margin-left: 4.88vw;

  img {
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 6.4vw;
  margin-right: 3.9vw;
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.5vw;
  height: 100%;
`

export const NavItem = styled.li`
  color: #005bd5;
  font-size: 1.02vw;
  font-family: 'Argentum Regular';
  cursor: pointer;

  background: linear-gradient(0deg, #005bd5, #005bd5) no-repeat;
  background-position: right bottom;
  background-size: 0 2px;
  transition: background-size 350ms;

  padding-bottom: 2px;
  
  &:where(:hover, :focus-visible) {
    background-size: 100% 2px;
    background-position-x: left;
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
  font-family: 'Argentum Bold';
  cursor: pointer;
  background-color: #005bd5;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #005bd5;
    border-color: #005bd5;
    background-color: transparent;
  }
`