import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginRequest = () => {
  return (
    <Link to="/login" style={{
        color:'white',
        textDecoration: 'none'
    }}>
        <Button color="inherit">Login</Button>
    </Link>
  )
}

export default LoginRequest