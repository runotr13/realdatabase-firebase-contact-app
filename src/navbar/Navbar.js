import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { red } from '@mui/material/colors';
import { UserContext } from '../context/UserContext';



export default function MenuAppBar() {

  const { currentUser,logOut } = useContext(UserContext);
  console.log(currentUser)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);



  const handleProfile = () => {
    navigate("/Profile")
    setAnchorEl(null);
  }
  const handleClick = () => {
    navigate("/")
    setAnchorEl(null);
  }
  const handleNew = () => {
    navigate("/New")
    setAnchorEl(null);
  }
  const handleLogout = () => {
    logOut()
    navigate("/login")
    setAnchorEl(null)
    
  }
  const handleMenu = (event) => { //event: React.MouseEvent<HTMLElement>
    setAnchorEl(event.currentTarget);
  };
  
  const handleRegister = () => {
    navigate('/Register')
  }
  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const handleCloseLogin = () => {
    navigate("/login")
    setAnchorEl(null);
  }
//*#046582
  return (
    <Box sx={{ flexGrow: 1,bgColor : red }} className='BoxClass' >
      
      <AppBar position="static" >
        <Toolbar>
          <a href="https://www.linkedin.com/in/onurkarakuzu/" target="_blank"><img src="https://www.startupnedir.com/wp-content/uploads/2018/09/linkedin-kullan%C4%B1rken-dikkat.jpg" alt="onurLinkedin" style={{width:"80px",paddingTop:"2px"}} href/></a>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} onClick={handleClick} className="Blog">
            <span>{`<ONUR/>BLOG`}</span>
          
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {
                currentUser ? 
                
                (
                <>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
                )
                : (<>
                  <MenuItem onClick={handleCloseLogin} >Login</MenuItem> 
                  <MenuItem onClick={handleRegister}>Register</MenuItem>
                  </>
                )
              }
                
                
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
