import React, {useState} from 'react';
import { Box, Button, TextField } from "@mui/material";
import FormInput from './FormInput'
import styled from 'styled-components';


  const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
const Register = () => {

  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldnt include any special character",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"it should be a valid email address!",
      label:"Email",
      required: true,
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and at least 1 letter, 1 number and 1 special character ",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords dont match",
      label:"Confirm Password",
      pattern:values.password,
      required: true,
    },
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(values)
  }

  const onChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  return (
    <div>
        <RegisterForm onSubmit={handleSubmit}>
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

                        {inputs.map((input)=>(
                                <FormInput 
                                key={input.id} 
                                {...input} 
                                value={values[input.name]} 
                                onChange={onChange}
                                pattern={input.pattern}
                                />


                              ))}
                </Box>

                      <Button 
                      type="submit"
                      variant="contained" 
                      size="small" 
                      color="primary"
                      >
                      Register
                      </Button>
        </RegisterForm>
    </div>
  )
}

export default Register