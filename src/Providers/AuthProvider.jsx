import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../fireBase.init';

export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => {
    const name = 'potato Alu Mia'


    const createUser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signInUser = (email,password) =>{

      return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {

      name,
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