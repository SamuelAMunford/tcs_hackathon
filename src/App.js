import React, {useState} from 'react';
import {Container,Box, TextField, Button,Typography, Tooltip} from '@mui/material';
import Form from './components/Form.js'
import logo from './images/logo.png';
import ChatBot from 'react-simple-chatbot';
import {steps, config} from './constants/steps.js'


const App = () => {

  return (
    <Container maxWidth="xl">
      <div style={{backgroundColor:'LightBlue', width: '100%', padding:'8px'}}>
        <img src={logo} alt="logo" style={{ width: 140, height: 50 }} />
      </div>
      <Box>
        <Typography align='center' gutterBottom variant='h3' >Visitor Sign In</Typography>
        <Form />
      </Box>
      
        <ChatBot steps={steps} {...config} />

      
    </Container>
  )
}

export default App

