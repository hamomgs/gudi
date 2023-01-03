import styled from 'styled-components'

export const TravelSection = styled.section`
  
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;

    &>div:nth-child(1) {
      order: 2;
    }

    &>div:nth-child(2) {
      order: 1;
    }

    &>div:nth-child(3) {
      order: 3;
    }

    &>div:nth-child(4) {
      order: 4;
    }

    &>div:nth-child(5) {
      order: 6;
    }

    &>div:nth-child(6) {
      order: 5;
    }
  }
`

export const AboutBox = styled.div`
  background: ${({ isWhite }) => isWhite ? '#fff' : 'linear-gradient(180deg, var(--blue) 0%, var(--dark-blue) 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.7vw;
  height: 31.5vw;
  color: ${({ isWhite }) => isWhite ? 'var(--blue)' : '#fff'};
  
  span {
    background-color: ${({ isWhite }) => isWhite ? 'var(--blue)' : '#fff'};
  }

  button {
    color: ${({ isWhite }) => isWhite ? 'var(--blue)' : '#fff'};
    border: solid 1px;
    border-color: ${({ isWhite }) => isWhite ? 'var(--blue)' : '#fff'};

    &:hover {
      color: ${({ isWhite }) => isWhite ? '#fff' : 'var(--blue)'};
      background-color: ${({ isWhite }) => isWhite ? 'var(--blue)' : '#fff'};
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 63vw;
  }
`

export const InfoBox = styled.div`
  width: 40.82vw;
  height: 19.53vw;

  @media (max-width: 600px) {
    width: 80vw;
    height: 40vw;
  }
`

export const LittleTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 1.07vw;
  padding-bottom: 0.78vw;
  font-family: 'Argentum Light';
  font-size: 1vw;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 600px) {
    gap: 2.14vw;
    font-size: 2vw;
    padding-bottom: 1.56vw;
  }
`

export const Line = styled.span`
  position: relative;
  width: 3.6vw;
  height: 2px;

  @media (max-width: 600px) {
    width: 7.2vw;
  }
`

export const Title = styled.h2`
  width: ${({ width }) => width ? width : '100%'};
  padding-bottom: 0.68vw;
  font-family: 'Argentum Black';
  font-size: ${({ fontSize }) => fontSize ? fontSize : '3.41vw'};
  letter-spacing: 0.73px;

  @media (max-width: 600px) {
    padding-bottom: 2vw;
    font-size: 6.82vw;
    font-size: ${({ fontSizeR }) => fontSizeR ? fontSizeR : '6.8vw'};
  }
`

export const Description = styled.p`
  padding-bottom: 2.44vw;
  font-family: 'Argentum Light';
  font-size: 1.36vw;

  span {
    font-family: 'Argentum Bold';
    background-color: transparent;
  }

  @media (max-width: 600px) {
    padding-bottom: 4.88vw;
    font-size: 3.5vw;
  }
`

export const Button = styled.button`
  width: 11vw;
  height: 2.6vw;
  border-radius: 1.4vw;
  letter-spacing: 3px;
  font-size: 1vw;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s ease;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 22vw;
    height: 5.2vw;
    border-radius: 3vw;
    font-size: 2vw;
  }
`

export const Picture = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: 100%;
  background-position: center;
  width: 49.7vw;
  height: 31.5vw;

  @media (max-width: 600px) {
    width: 100vw;
    height: 63vw;
  }
`

export const StatesContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

export const StateBox = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24.85vw;
  height: 19.72vw;

  @media (max-width: 900px) {
    width: 50vw;
    height: 40vw;
  }
`

export const StateBtn = styled.button`
  width: 15.03vw;
  height: 2.83vw;
  border: solid 1px #fff;
  border-radius: 1.4vw;
  color: #fff;
  letter-spacing: 3px;
  font-size: 0.97vw;
  text-transform: uppercase;
  cursor: pointer;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: 0.3s ease;
  background-color: rgba(18, 29, 18, 0.2);

  &:hover {
    background-color: rgba(18, 29, 18, 0.8);
  }

  @media (max-width: 900px) {
    width: 37vw;
    height: 5.7vw;
    border-radius: 3vw;
    font-size: 2vw;
  }
`