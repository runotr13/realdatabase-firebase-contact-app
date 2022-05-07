import { initializeApp } from "firebase/app";
// import React from 'react'
import {
    getAuth,
    GoogleAuthProvider,
    // createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // signInWithPopup,
    // signOut,
    // updateProfile,
    // onAuthStateChanged,
    // sendPasswordResetEmail,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {useState,useEffect} from "react";
// import { ref,set,push,onValue, remove,update} from "firebase/database";
// import Swal from "sweetalert2";
// import { toastErrorNotify, toastWarnNotify } from "../helpers/ToastNotify";
// import { AuthContext } from "../context/AuthContext";


const AppFire = initializeApp({
    apiKey: "AIzaSyCFhXds9wUKbui6IMgDXDdtOLN3yxUTloI",
    authDomain: "fire-contact-blog.firebaseapp.com",
    databaseURL: "https://fire-contact-blog-default-rtdb.firebaseio.com",
    projectId: "fire-contact-blog",
    storageBucket: "fire-contact-blog.appspot.com",
    messagingSenderId: "463901656659",
    appId: "1:463901656659:web:644f0b10fd57483350a8a6"
});

export const auth = getAuth(AppFire);
export const googleProvider = new GoogleAuthProvider();
export const firebaseDB = getDatabase();

// //* Kullanici register oluşturma
// export const createUser = async (email, password,navigate) => {
//     try {
//         //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
//         let userCredential = await createUserWithEmailAndPassword(
//             auth,
//             email,
//             password
//         );
        
//         //? kullanıcı profilini güncellemek için kullanılan firebase metodu
//         await updateProfile(auth.currentUser, {
//             email : email
//         });
        
//         navigate("/");
//         /* toastSuccessNotify("Registered successfully!"); */
//         Swal.fire(
//           'Good job!',
//           'Logged in successfully!',
          
//         )
//         console.log(userCredential);
//     } catch (err) {
//         toastErrorNotify(err.message);
//     }
// }

// //* Kullanici girişi,Login
// export const signIn = async (email, password,navigate) => {
//     try {
//       //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
//       let userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       navigate("/");
//       /* toastSuccessNotify("Logged in successfully!"); */
//       Swal.fire(
//         'Good job!',
//         'Logged in successfully!',
        
//       )
//       console.log(userCredential);
//     } catch (err) {
//       toastErrorNotify("Lütfen kimlik oluşturun!");
      
    
    
//     }
//   };
//   //* Kullani çıkış yapıp tekrar girmek istediginde 
//   export const logOut = () => {
    
//     signOut(auth) 
//     /* toastSuccessNotify("Logged out successfully!"); */
//   };

//   //* Kullanici girip girmediği
//   export const userObserver = (setCurrentUser) => {
//     //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
//     onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setCurrentUser(currentUser);
//       } else {
//         // User is signed out
//         setCurrentUser(false);
//       }
//     });
//   };

// //* Google ile giriş
//   export const signUpProvider = (navigate) => {
//     //? Google ile giriş yapılması için kullanılan firebase metodu
//     const provider = new GoogleAuthProvider();
//     //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//         navigate("/");
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         console.log(error);
//       });
//   };

//   //* şifre unutulduysa
//   export const forgotPassword = (email) => {
//     //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         // Password reset email sent!
//         toastWarnNotify("Please check your mail box!");
//         // alert("Please check your mail box!");
//       })
//       .catch((err) => {
//         toastErrorNotify(err.message);
//         // alert(err.message);
//         // ..
//       });
//   };
//!
// //* Task Ekleme Blog
// export const AddTask=(info,navigate)=>{
//   console.log(info)
//   const {currentUser} = React.useContext(AuthContext);
//     const userRef=ref(firebaseDB,"Task");
//     const newUserRef=push(userRef)
//     set((newUserRef),{
//         title:info.title,
//         imgUrl:info.imgUrl,
//         content:info.content,
//         user: currentUser?.email,
//         likeCount: 0,
//         commentCount:0,
//         date:Date.now()
//     })
//     navigate("/")
// }


// //* Bilgi Çağırma

// export const useFetch=()=>{
//     const [isLoading,setIsLoading]=useState();
//     const [taskList,setTaskList]=useState();
//     useEffect(() => {
//         setIsLoading(true)
        
//         const userRef=ref(firebaseDB,"Task");
        
//         onValue(userRef, (snapshot) => {
//             const data = snapshot.val();
//             const getTaskArray=[];
//             for(let id in data){
//                 getTaskArray.push({id,...data[id]})
                
//             }          
//             setTaskList(getTaskArray);
            
//             setIsLoading(false);
//         });
//     },[])
//     return {isLoading,taskList}
// }


// // Bilgi silme
// export const DeleteTask=(id)=>{

//         const userRef=ref(firebaseDB,"Task");
//         remove(ref(firebaseDB,"Task/"+id))


// }

// // Bilgi Değiştirme


// export const EditTask=(info)=>{
    
//     const updates = {};

//     updates["Task/"+info.id]=info;
//     return update(ref(firebaseDB),updates);

// }

