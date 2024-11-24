import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../fireBase.init';

export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
    const name = 'potato Alu Mia'


    const createUser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }



    onAuthStateChanged(auth,currentUser=>{


      if(currentUser)
      {
        console.log('currently logged user',currentUser)
        setUser(currentUser);
      }

      else{
        console.log('No user logged in')
        setUser(null)
      }
    })


    const signInUser = (email,password) =>{

      return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() =>{

      const unSubscribe = onAuthStateChanged(auth, currentUser =>{

        console.log('current User',currentUser)
        setUser(currentUser);
      })
     

      return () =>{
        unSubscribe();
      }

    },[])
    const authInfo = {

      name,
      user,
      createUser,
      signInUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
       
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1.Create Cotext with null as default
 * 2.Create Provider
 * 3.Set a value with something (authInfo)
 * 4.[attention Please !!!]
 * 5. use the authProvider in the main.jsx
 * 
 * 6. access the children inside the main.jsx
 * 7.export authContext
 *  
 */