import * as React from 'react';
import { useState } from 'react';


//Components
import Register from '../components/Register'
import Login from '../components/Login';

import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions } from '@mui/material';
import { TheaterComedy } from '@mui/icons-material';

const LoginPage =()=> {

    const LoginContainer = styled.div`
        width: 100%;
        height: 100%;
        margin-top: 20px;
        display: flex;
        justify-content:center;
        align-items:center;
    `;

    const [signup, setSignUp] = useState(false)
    console.log(signup)

  return (
    <LoginContainer>
        <Card sx={{ 
            width: '345px',
            height:'auto',
            padding:'10px',
            borderRadius:'15px',
            opacity:0.75,
            
            }}>
            <CardMedia sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'1rem'
            }}>
                <TheaterComedy sx={{fontSize:'60px', display:'block', color:'#1976D2'}}/>
                <Typography gutterBottom variant="h5" component="div" 
                sx={{
                    opacity:0.8,
                }}>
                    MovieMania
                </Typography>
            </CardMedia>
                    {!signup?<Login/>:<Register/>}                    
        <CardActions sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            
            <Button 
            sx={{
                marginTop:'30px'
            }}
            onClick={()=>setSignUp(!signup)}
            Button variant="outlined">{!signup?'Register Here': 'Login Here'}</Button>

        </CardActions>
        </Card>
    </LoginContainer>

  );
}
export default LoginPage