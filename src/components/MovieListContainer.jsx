import React, {useContext} from 'react'
import styled, {keyframes} from 'styled-components';
import Movies from './MoviesComponent';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { DataContext } from '../Layout';
//import Background from './Background'


const MovieListContainer = () => {

  const movieList = useContext(DataContext)

  const ParentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const StartSearching = styled.div`
    display: flex;
    margin-top: 15%;
    justify-content: center;
    align-items: center;

  `;

  const MovieListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 30px;
  gap: 24px;
  justify-content: center;
  align-items: center;
  
   @media (max-width: 968px){
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

   }
   @media (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr) ;
   }

   @media (max-width: 545px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
   }
`;

const gradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`

const BackgroundContainer = styled.div `
        position: fixed;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        margin: auto;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        overflow: auto;
        background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, #be19ff 98%);
        animation: ${gradient} 15s ease infinite;
        background-size: 400% 400%;
        background-attachment:fixed;
`;

const waveAnimation = keyframes`
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }

`

const Wave = styled.div`
    z-index: -1;
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: ${waveAnimation} 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
    &:nth-of-type(2){
        bottom: -1.25em;
        animation: wave 18s linear reverse infinite;
        opacity: 0.8;
    }
    &:nth-of-type(3){
        bottom: -2.5em;
        animation: wave 20s -1s reverse infinite;
        opacity: 0.9;
    }
`;
  
  return (
    <BackgroundContainer>
      <ParentWrapper>
      { movieList.length 
          ? <MovieListLayout>
            {movieList.map((movie, index)=> (
              <Movies 
              key={index} 
              movie={movie}
              />
            ))}
          </MovieListLayout>
          : <StartSearching>
              <LocalMoviesIcon sx={{
                fontSize:"200px",
                color:'#1976D2'
              }}/>
            </StartSearching>}
      </ParentWrapper>
      <Wave />
      <Wave />
      <Wave />
    </BackgroundContainer>
  )
}

export default MovieListContainer