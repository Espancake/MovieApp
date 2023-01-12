import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Components
import MovieList from './components/MovieListContainer.jsx';
import Layout from './Layout';
import MovieInfo from './components/MovieInfo'

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<MovieList/>}/>
            <Route exact path="/movieinfo/:id" element={<MovieInfo/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;

