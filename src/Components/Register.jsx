import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Result from 'postcss/lib/result';

const Register = () => {

  const navigate = useNavigate()
    //  Email Authentication er function jeta amra AuthProvider e use koreci seta access kori

    const {createUser } = useContext (AuthContext);


    const handleRegister = e =>

        {
            e.preventDefault();
            const email = e.target.email.value
            const password = e.target.password.value
            const name = e.target.name.value
            console.log(email,password,name)

            // Create User

            createUser(email,password)
            .then(result =>{

              console.log(result.user)

              e.target.reset()
              navigate('/login')
            })

            .catch(error =>{

              console.log('ERROR',error.message)
            })
        }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <p className='mb-8 ml-4'>Already have an account? Please <Link className='underline text-red-500' to='/login'>LogIn</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Register;