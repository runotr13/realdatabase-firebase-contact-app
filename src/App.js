import './App.css';
import AppRouter from './rooter/AppRouter';
// import AuthContextProvider from './context/AuthContext'
import { ToastContainer } from 'react-toastify';
import { UserContextProvider } from './context/UserContext';
import { NewBlogContextProvider } from './context/NewBlogContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NewBlogContextProvider>
              <AppRouter/>
              <ToastContainer />
        </NewBlogContextProvider>
      </UserContextProvider>



            
      
    </div>
  );
}

export default App;
