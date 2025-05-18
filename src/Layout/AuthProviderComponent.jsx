
import { createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export  const AuthContext=createContext(null)


const AuthProviderComponent = ({ children }) => {

  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  const googleProvider=new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()

  const emailLogin=(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }

  const googleLogIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }

  const githubLogIn=()=>{
    return signInWithPopup(auth,githubProvider)
  }
  
  const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
       displayName: name, photoURL:photo
    })
  }



 useEffect(()=>{
   const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)

      })
      return ()=>unSubscribe()
 },[])


 const allAuth={emailLogin,logIn,logOut,user,loading,googleLogIn,githubLogIn,updateUserProfile}

  return <AuthContext value={allAuth}>
    {children}
  </AuthContext>;
};

export default AuthProviderComponent;
