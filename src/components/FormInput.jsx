import React from 'react'
import { useState } from 'react';
import { TextField, Box } from '@mui/material'
import styled from 'styled-components';

    const Error = styled.span `
        color: red;
        width: 256px;
    `



const FormInput = (props) => {

    
    const {label, errorMessage, onChange, pattern, id, ...inputprops} = props;

    const [isValid, setIsValid] = useState(true);

    const handleBlur = (event) => {
      setIsValid(event.target.checkValidity() && (!pattern || new RegExp(pattern).test(event.target.value)));
    };
  
    return (
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <TextField
          required
          {...inputprops}
          id={`outlined-required-${id}`}
          label={label}
          onBlur={handleBlur}
          onChange={onChange}
          sx={{
            '.MuiInputLabel-asterisk':{ display:'none' },
            '&:invalid[focused="true"] ~ span': { display: 'block' },
          }}
        />
        {!isValid && <Error>{errorMessage}</Error>}
      </Box>
    );
  };
  
  export default FormInput;