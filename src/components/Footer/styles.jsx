import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8vw;
  height: 18.45vw;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 92vw;
    height: 40vw;
    margin: 5vw auto;
  }
  
  @media (max-width: 600px) {
    width: 78vw;
    height: 160vw;
    margin: 15vw auto;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.66vw;
  width: ${({ width }) => width ? width : '11.71vw'};

  @media (max-width: 900px) {
    width: ${({ width }) => width ? '17.8vw' : '16.42vw'};
  }

  @media (max-width: 600px) {
    width: ${({ width }) => width ? '36.8vw' : '32.42vw'};
  }
`

export const Logo = styled.img`
  width: 11.71vw;

  @media (max-width: 900px) {
    width: 18vw;
  }

  @media (max-width: 600px) {
    width: 35vw;
  }
`

export const Title = styled.h3`
  font-family: 'Argentum Bold';
  font-size: 1.46vw;
  color: var(--blue);

  @media (max-width: 900px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    font-size: 4vw;
  }
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

  @media (max-width: 900px) {
    gap: 0.8vw;

    a {
      font-size: 1.6vw;
    }
  }

  @media (max-width: 600px) {
    gap: 1.5vw;

    a {
      font-size: 3.2vw;
    }
  }
`