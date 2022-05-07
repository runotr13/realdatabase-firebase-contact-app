import React, { useContext, useState } from 'react'
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { teal } from '@mui/material/colors';
import blok from '../assets/blok.png'
import google from '../assets/google.png'
import { useNavigate } from 'react-router-dom';

import {  UserContext } from '../context/UserContext';


const Login = () => {
  const {forgotPassword, signIn, signUpProvider} = useContext(UserContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [currentUser, setCurrentUser] = useState();

 /*  useEffect(() => {
    userObserver(setCurrentUser,currentUser);
    
    console.log(currentUser)
  }, [currentUser]); */

  const handleGoogleSingIn = () => {
    signUpProvider(navigate)
  };
  const handleClick = (e) => {
    e.preventDefault()
    signIn(email, password,navigate)
  }

  return (
    <div className="loginBg">
    <Container maxWidth="sm" className="loginContainer">
    <Box
      sx={{
        height: "100vh",
        marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
          alt="avatar_img"
          src={blok}
          sx={{ width: 150, height: 150 ,bgColor: teal[900] ,  borderRadius : 100}}
        />
        
      <Typography variant="h4" component="h1" sx={{ m: 4 }}>
        Login
      </Typography>

      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="email"
              name="email"
              variant="outlined"
              type="email"
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="password"
              name="password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <div className="link" onClick={() => forgotPassword(email)}>
            Forgot password?
          </div>
          </Grid>
    
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGoogleSingIn}
              fullWidth
              className = "buttonImgClass"
            >
              <h4>{`WITH `}</h4>
              <img src={google} alt="Google" className="googleImg"/>
              
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Container>
  </div>
  )
}

export default Login