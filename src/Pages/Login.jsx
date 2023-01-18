import * as React from 'react';

import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { TheaterComedy } from '@mui/icons-material';
import { borderRadius } from '@mui/system';

const Login =()=> {

    const LoginContainer = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
    `;



  return (
    <LoginContainer>
        <Card sx={{ 
            width: '345px',
            height:'400px',
            border:'1px solid red',
            borderRadius:'15px',
            opacity:0.75,
            
            }}>
        <CardActionArea>
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
                    MovieLogin
                </Typography>
            </CardMedia>
            <CardContent>
                //inputs
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Login
            </Button>
        </CardActions>
        </Card>
    </LoginContainer>

  );
}
export default Login