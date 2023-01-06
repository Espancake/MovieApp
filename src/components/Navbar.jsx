//react resources
import * as React from 'react';
import { useState } from 'react';

//http axios resources
import axios from 'axios';

//Material-UI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { TheaterComedy } from '@mui/icons-material';

//API resources
export const API_KEY = "63dae85e"
9

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar=({handleData})=> {

    const [searchQuery, updateSearchQuery] = useState("");
    const [timeoutId, updateTimeoutId] = useState();


    const fetchData = async (searchString)=>{
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
        );
        handleData(response.data.Search)
    }

    const onTextChange = (e) =>{
      clearTimeout(timeoutId)
      updateSearchQuery(e.target.value);
      const timeout = setTimeout(()=> fetchData(e.target.value),500);
      updateTimeoutId(timeout)
    };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
        sx={{display:'flex',
             justifyContent:'space-between',  
      }}>
          <TheaterComedy sx={{fontSize:'60px', display:'block'}}/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={onTextChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar