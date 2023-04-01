import React, {useState} from 'react';
import { Box, Button, TextField } from "@mui/material";


const Login = () => {



  return (
    <div>
        <form>
        <Box 
                    component="form"
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column',
                        '& .MuiTextField-root': { m: 1, width: '32ch' },
                    }}
                >
                        <TextField
                        required
                        id="outlined-required"
                        label="User"
                        sx={{
                          '.MuiInputLabel-asterisk':{display:'none'}
                        }}
                        
                        />
                        <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        sx={{
                          '.MuiInputLabel-asterisk':{display:'none'}
                        }}
                        autoComplete="current-password"
                        
                        />

                      <Button type='submit' variant="contained" size="small" color="primary">
                      Login
                      </Button>
                </Box>
        </form>
    </div>
  )
}

export default Login