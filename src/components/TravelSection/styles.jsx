import styled from 'styled-components'

export const TravelSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  
`

export const AboutBox = styled.div`
  background: ${({ isWhite }) => isWhite ? '#fff' : 'linear-gradient(180deg, #005bd5 0%, #002e6b 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.7vw;
  height: 31.5vw;
  color: ${({ isWhite }) => isWhite ? '#005bd5' : '#fff'};
  
  span {
    background-color: ${({ isWhite }) => isWhite ? '#005bd5' : '#fff'};
  }

  button {
    color: ${({ isWhite }) => isWhite ? '#005bd5' : '#fff'};
    border: solid 1px;
    border-color: ${({ isWhite }) => isWhite ? '#005bd5' : '#fff'};

    &:hover {
      color: ${({ isWhite }) => isWhite ? '#fff' : '#005bd5'};
      background-color: ${({ isWhite }) => isWhite ? '#005bd5' : '#fff'};
    }
  }
`

export const Container = styled.div`
  width: 40.82vw;
  height: 19.53vw;
`

export const LittleTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 1.07vw;
  padding-bottom: 0.78vw;
  font-weight: 400;
  font-size: 1vw;
  text-transform: uppercase;
  letter-spacing: 3px;
`

export const Line = styled.span`
  position: relative;
  width: 3.6vw;
  height: 2px;
`

export const Title = styled.h2`
  width: ${({ width }) => width ? width : '100%'};
  padding-bottom: 0.68vw;
  font-family: 'Argentum Black';
  font-size: ${({ fontSize }) => fontSize ? fontSize : '3.41vw'};
  letter-spacing: 0.73px;
`

export const Description = styled.p`
  padding-bottom: 2.44vw;
  font-family: 'Argentum Light';
  font-size: 1.36vw;

  span {
    font-family: 'Argentum Bold';
    background-color: transparent;
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
`

export const Picture = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: 100%;
  background-position: center;
  width: 49.7vw;
  height: 31.5vw;
`

export const StatesContainer = styled.div`
  display: flex;
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
`