import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';
import {ThreeDots} from 'react-loader-spinner'
import { Button } from '@mui/material';
import { API_KEY } from './Navbar';


const MovieInfo = () => {
const location = useLocation();
const movieId = location.state;

const MovieInfoContainer = styled.div`
  border: 1px solid red;
  width: auto;
  height: 100%;
  padding: 3rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 4fr 50px;
`
const CoverImage = styled.img`
  width: auto;
  height: auto;
`

const InfoContainer = styled.div`
  background-color: #ffffff8d;
  border: 1px solid blue;
  border-radius: 15px;
`

const MovieTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`

const MovieInfo = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
  `;

  const ButtonsContainer = styled.div`
    border: 1px solid violet;
    grid-column-end: 3;
    display: flex;
    flex-direction: row;


  `

  const LoadingContainer = styled.div`
    grid-column: 1 /3;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75.4vh;
    width: 100%;
  `;


const navigate = useNavigate()
const [movieInfo, setMovieInfo] = useState();

const GoBack =()=>{
  navigate(-1)
}

useEffect(()=>{
    Axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
    ).then((response)=> setMovieInfo(response.data)).then(()=>{console.log(movieInfo)});
}, [])

  return (
    <MovieInfoContainer>
      {movieInfo ? (
        <>
        <CoverImage src={movieInfo.Poster} alt={movieInfo.Title}/>
        <InfoContainer>
          <MovieTitle>
            {movieInfo.Type}: <span>{movieInfo.Title}</span>
          </MovieTitle>
          <MovieInfo>
            Plot: <span>{movieInfo.Plot}</span>
          </MovieInfo>
          <MovieInfo>
            Actors: <span>{movieInfo.Actors}</span>
          </MovieInfo>
          <MovieInfo>
            Director: <span>{movieInfo.Director}</span>
          </MovieInfo>
          <MovieInfo>
            Writer: <span>{movieInfo.Writer}</span>
          </MovieInfo>
          <MovieInfo>
            Year: <span>{movieInfo.Year}</span>
          </MovieInfo>
          <MovieInfo>
            Genre: <span>{movieInfo.Genre}</span>
          </MovieInfo>
          <MovieInfo>
            RunTime: <span>{movieInfo.RunTime}</span>
          </MovieInfo>
          <MovieInfo>
            Language: <span>{movieInfo.Language}</span>
          </MovieInfo>
          <MovieInfo>
            Country: <span>{movieInfo.Country}</span>
          </MovieInfo>
          <MovieInfo>
            Rated: <span>{movieInfo.Rated}</span>
          </MovieInfo>
          <MovieInfo>
            IMDB Rating: <span>{movieInfo.imdbRating}</span>
          </MovieInfo>
        </InfoContainer>
        <ButtonsContainer>
          <Button onClick={GoBack} size='medium' variant="contained">
            Go Back
          </Button>
          <Button size='medium' variant="outlined">
            Link
          </Button>
        </ButtonsContainer>
        </>
      ):(
        <LoadingContainer>
            <ThreeDots
            color="#1976D2"
            size={50}
            height={200}
            width={200}
            />
        </LoadingContainer>
      )}
      

    </MovieInfoContainer>
  )
}

export default MovieInfo