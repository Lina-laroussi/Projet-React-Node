import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { signin } from '../actions/UserActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function SigninScreen(props) {

   const [email ,setEmail] = useState('');
   const [password ,setPassword ]= useState('');
   const location = useLocation();

   const redirect = location.search ? location.search.split("=")[1]: '/shipping';
  /* const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';*/

   const userSignin = useSelector((state)=> state.userSignin);
    const { userInfo , loading ,error } = userSignin;

    const dispatch = useDispatch();
    const navigate= useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email,password));
    };

   useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
        
    }, [redirect, userInfo,navigate]);
  return(
   <div>
       <form className='form' onSubmit={submitHandler}>
          <div>
             <h1>Sign In</h1>
             {loading && <LoadingBox></LoadingBox>}
             {error && <MessageBox variant="danger">{error}</MessageBox>}
          </div>
          <div>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder='Enter Email' required 
              onChange={ e =>setEmail(e.target.value) }></input>
          </div>
           <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Enter Password' required 
              onChange={ e =>setPassword(e.target.value) }></input>
          </div>
          <div>
              <label/>
              <button className='primary' type="submit">Sign In </button>
          </div>
          <div>
              <label/>
              <div>
                  new customer? {''}
                  <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
              </div>
          </div>
       </form>
  </div>
  )
}
