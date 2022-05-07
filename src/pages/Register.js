import React, {  useContext, useState } from 'react'
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
import { UserContext } from '../context/UserContext';



const Register = () => {
  const {signUpProvider,createUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = (e) => {
    e.preventDefault()
    createUser(email, password,navigate)
    
  }
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);
  const handleGoogleSingIn = () => {
    signUpProvider(navigate)
    
  };
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
      Register
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
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className = "buttonImgClass"
              onClick={handleGoogleSingIn}
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

export default Register