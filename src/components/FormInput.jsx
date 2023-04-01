import React from 'react'
import { useState } from 'react';
import { TextField, Box } from '@mui/material'
import styled from 'styled-components';

const FormInput = (props) => {

    const Error = styled.span `
        color: red;
        width: 200px;
    `


    
    const {name, label, errorMessage, onChange, pattern, id, ...inputprops} = props;

    const [isValid, setIsValid] = useState(true);

    const handleBlur = (e) => {
      setIsValid(e.target.checkValidity() && (!pattern || new RegExp(pattern).test(e.target.value)));
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
          id={"outlined-required" && "id"}
          label={label}
          name={name}
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