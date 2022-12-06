import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import Heading from './Heading';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// This is a component named Register
function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  }

  const onRegisterClick = async (evt) => {
    evt.preventDefault();
    
    await createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        console.log(user);
        props.onAuthenticate(user);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.code, error.message);
      });
  }

  const onSignInClick = async (evt) => {
    evt.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        console.log(user);
        props.onAuthenticate(user);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.code, error.message);
      });
  }

  return (
    <Paper sx={{ mx: 10, mt: 4, py: 2 }}>
      <Heading text="Create an Account" type="h2" />
      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
          <TextField
            type="email"
            label="Email Address"
            value={email}
            onChange={onEmailChange}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
          />
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
        <Button
          variant="outlined"
          size="small"
          onClick={onRegisterClick}
          sx={{ my: 2 }}
        >
            Register
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={onSignInClick}
          sx={{ my: 2 }}
        >
            Sign In
        </Button>
      </Stack>
    </Paper>
  );
}
  
export default Register;