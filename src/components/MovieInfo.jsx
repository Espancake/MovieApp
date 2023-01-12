import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const MovieInfo = () => {
const location = useLocation();
console.log(location.state)

  return (
    <div>
      hello

    </div>
  )
}

export default MovieInfo