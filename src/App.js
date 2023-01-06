import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Components
import MovieList from './components/MovieListContainer.jsx';
import Layout from './Layout';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<MovieList/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;

