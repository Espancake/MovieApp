import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Components
import MovieList from './components/MovieListContainer.jsx';
import Layout from './Layout';
import MovieInfo from './components/MovieInfo';
import NotFound from './components/NotFound';
import Login from './Pages/Login';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<MovieList/>}/>
            <Route exact path="/movieinfo/:id" element={<MovieInfo/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;

