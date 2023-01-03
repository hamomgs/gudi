import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8vw;
  height: 18.45vw;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.66vw;
  width: ${({ width }) => width ? width : '11.71vw'};
`

export const Logo = styled.img`
  width: 11.71vw;
`

export const Title = styled.h3`
  font-family: 'Argentum Bold';
  font-size: 1.46vw;
  color: var(--blue);
`

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;

  a {
    font-family: 'Argentum Medium';
    font-size: 1.17vw;
    color: var(--blue);

    &:hover {
      text-decoration: underline;
    }
  }
`