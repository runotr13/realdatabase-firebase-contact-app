import {useState,useEffect} from "react";
import { ref,set,push,onValue, remove,update} from "firebase/database";
import React,{createContext} from 'react'
import {firebaseDB} from '../utils/firebaseUser'
import {  UserContext } from "./UserContext";

export const BlogContext = createContext();

export const NewBlogContextProvider = ({children}) => {
    const {currentUser} = React.useContext(UserContext);
    /* console.log("newblog",currentUser.email) */

    //* Task Ekleme Blog
 const AddTask=(info,navigate)=>{
    console.log(info)
    
      const userRef=ref(firebaseDB,"Task");
      const newUserRef=push(userRef)
      set((newUserRef),{
          title:info.title,
          imgUrl:info.imgUrl,
          content:info.content,
          user: currentUser?.email,
          likeCount: 0,
          commentCount:0,
          date:Date.now()
      })
      navigate("/")
  }
  
  
  //* Bilgi Çağırma
  
   const useFetch=()=>{
      const [isLoading,setIsLoading]=useState();
      const [taskList,setTaskList]=useState();
      useEffect(() => {
          setIsLoading(true)
          
          const userRef=ref(firebaseDB,"Task");
          
          onValue(userRef, (snapshot) => {
              const data = snapshot.val();
              const getTaskArray=[];
              for(let id in data){
                  getTaskArray.push({id,...data[id]})
                  
              }          
              setTaskList(getTaskArray);
              
              setIsLoading(false);
          });
      },[])
      return {isLoading,taskList}
  }
  
  
  // Bilgi silme
   const DeleteTask=(id)=>{
  
          /* const userRef=ref(firebaseDB,"Task"); */
        remove(ref(firebaseDB,"Task/"+id))
  
  
  }
  
  // Bilgi Değiştirme
  
  
   const EditTask=(info)=>{
      
      const updates = {};
  
      updates["Task/"+info.id]=info;
      return update(ref(firebaseDB),updates);
  
  }
  return (
      <BlogContext.Provider value={{EditTask,DeleteTask,useFetch,AddTask}}>
            {children}
      </BlogContext.Provider>
  )
};