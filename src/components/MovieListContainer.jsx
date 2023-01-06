import React, {useContext} from 'react'
import styled from 'styled-components';
import Movies from './MoviesComponent'
import { DataContext } from '../Layout';

const MovieListContainer = () => {

  const movieList = useContext(DataContext)

  const MovieListLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;
  
  return (
    <MovieListLayout>
      { movieList.length 
        ? movieList.map((movie, index)=> (
        <Movies 
        key={index} 
        movie={movie}
        />
        ))
        : <span> Start Searching</span>}
    
    </MovieListLayout>
  )
}

export default MovieListContainer