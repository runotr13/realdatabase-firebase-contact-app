import React, { useContext } from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate, Outlet, useLocation} from "react-router-dom"
import Main from '../pages/Main'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import New from '../pages/New'
import Register from '../pages/Register'
import Navbar from '../navbar/Navbar'
import { UserContext } from '../context/UserContext'
import UpdateBlog from '../pages/UpdateBlog'
const AppRouter = () => {
    const { currentUser } = useContext(UserContext);
    function PrivateRouter() {
        let location = useLocation();
        if (!currentUser) {
          // Redirect them to the /login page, but save the current location they were
          // trying to go to when they were redirected. This allows us to send them
          // along to that page after they login, which is a nicer user experience
          // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
        }
    
        return <Outlet />;
      }
return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/New" element={<New />} />
            <Route path="/login" element={<Login />} />
            <Route path="/update" element={<UpdateBlog/>} />
            
            
        </Routes>
    </Router>
)
}

export default AppRouter