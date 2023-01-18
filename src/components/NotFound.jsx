import React from 'react'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import styled from 'styled-components'
import { Typography } from '@mui/material';

const NotFoundContainer = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75.4vh;
    gap: 30px;
`
const NotFound = () => {
  return (
    <NotFoundContainer>
        <SatelliteAltIcon 
        sx={{
            fontSize:"200px",
            color:"#1976D2"
        }}
        />
        <Typography
        sx={{
            fontSize:"40px",
            opacity:0.5
        }}
        >
            Not Found
        </Typography>
    </NotFoundContainer>
  )
}

export default NotFound