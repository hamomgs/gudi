import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.3vw;
`

export const LogoContainer = styled.figure`
  height: 2.2vw;
  margin-left: 4.88vw;

  img {
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 66px;
  margin-right: 3.9vw;
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  height: 100%;
`

export const NavItem = styled.li`
  color: #005bd5;
  font-size: 1.2vw;
  font-family: 'Argentum Regular';
  cursor: pointer;
`

export const Button = styled.button`
  width: 11.7vw;
  height: 2.9vw;
  border-radius: 1.4vw;
  border: none;
  color: #fff;
  letter-spacing: 3px;
  font-size: 1.07vw;
  font-family: 'Argentum Bold';
  cursor: pointer;
  background-color: #005bd5;
`