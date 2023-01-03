import styled from 'styled-components'

export const ExperiencesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LittleTitle = styled.h3`
  font-family: 'Argentum Medium';
  font-size: 1.46vw;
  color: var(--dark-gray);
  padding-top: 7.61vw;

  @media (max-width: 600px) {
    font-size: 3.92vw;
    padding-top: 18vw;
  }
`

export const Title = styled.h2`
  max-width: 25.97vw;
  font-family: 'Argentum Bold';
  font-size: 3.22vw;
  text-align: center;
  color: var(--dark-gray);
  padding-bottom: 4.29vw;

  @media (max-width: 600px) {
    max-width: 72vw;
    font-size: 8.44vw;
    padding-bottom: 9vw;
  }
`

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.17vw;
  width: 70vw;
  padding-bottom: 4.68vw;

  @media (max-width: 600px) {
    gap: 2.34vw;
    width: 90vw;
    padding-bottom: 9vw;
  }
`

export const Photo = styled.img`
  width: 19.33vw;
  height: 19.23vw;

  @media (max-width: 600px) {
    width: 39.33vw;
    height: 39.23vw;
  }

  @media (max-width: 480px) {
    width: 69.33vw;
    height: 69.23vw;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.95vw;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 3.9vw;
    width: 85vw;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.71vw;
  width: 13.67vw;
  height: 16.11vw;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 600px) {
    gap: 3.42vw;
    width: 40.34vw;
    height: 45.22vw;
  }
`

export const CardIcon = styled.img`
  width: ${({ width }) => width};

  @media (max-width: 600px) {
    width: ${({ respWidth }) => respWidth};
  }
`

export const CardDescription = styled.p`
  max-width: ${({ color }) => color !== '#fff' && '7vw'};
  font-family: 'Argentum Bold';
  font-size: 1.36vw;
  text-align: center;
  color: ${({ color }) => color};

  @media (max-width: 600px) {
    max-width: ${({ color }) => color !== '#fff' && '24vw'};
    font-size: 3.72vw;
  }
`