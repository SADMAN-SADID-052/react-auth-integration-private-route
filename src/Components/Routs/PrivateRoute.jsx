import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)


    if(loading)
    {
        return <div className='flex justify-center'><span className="loading loading-ring loading-lg "></span></div>
    }
    if(user)
    {
        return children
    }

    //  na thakle react router Navigate diye kaj korte hobe


    return (
        <div>
         

         <Navigate to="/login"></Navigate>

            
        </div>
    );
};

export default PrivateRoute;