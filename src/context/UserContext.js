import Swal from "sweetalert2";
import { toastErrorNotify, toastWarnNotify } from "../helpers/ToastNotify";
import {
    
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "firebase/auth";
import {auth,googleProvider} from '../utils/firebaseUser'
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [currentUser,setCurrentUser] = useState()

    //* Kullanici register oluşturma
 const createUser = async (email, password,navigate) => {
    try {
        //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        
        //? kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
            email : email
        });
        
        navigate("/");
        /* toastSuccessNotify("Registered successfully!"); */
        Swal.fire(
          'Good job!',
          'Logged in successfully!',
          
        )
        console.log(userCredential);
    } catch (err) {
        toastErrorNotify(err.message);
    }
}

//* Kullanici girişi,Login
 const signIn = async (email, password,navigate) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      /* toastSuccessNotify("Logged in successfully!"); */
      Swal.fire(
        'Good job!',
        'Logged in successfully!',
        
      )
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify("Lütfen kimlik oluşturun!");
      
    
    
    }
  };
  //* Kullani çıkış yapıp tekrar girmek istediginde 
   const logOut = () => {
    signOut(auth) 
    /* toastSuccessNotify("Logged out successfully!"); */
  };

  //* Kullanici girip girmediği
   const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

//* Google ile giriş
   const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    /* const provider = new GoogleAuthProvider(); */
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  //* şifre unutulduysa
   const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };
  return (
    <UserContext.Provider value={{ currentUser,forgotPassword,signUpProvider,logOut,signIn,createUser}}>
        {children}
    </UserContext.Provider>
  )



};