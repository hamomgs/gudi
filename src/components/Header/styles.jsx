import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

export const LogoContainer = styled.figure`
  height: 28px;
  margin-left: 50px;

  img {
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 66px;
  margin-right: 40px;
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  height: 100%;
`

export const NavItem = styled.li`
  color: #005bd5;
  font-size: 1.4rem;
  font-family: 'Argentum Regular';
  cursor: pointer;
`

export const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
  letter-spacing: 3px;
  font-size: 1.1rem;
  font-family: 'Argentum Bold';
  cursor: pointer;
  background-color: #005bd5;
`