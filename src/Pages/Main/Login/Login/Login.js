import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import PageTitle from '../../../SharedPage/PageTitle/PageTitle';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        alert(error);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (user) {
        console.log(user);
    }
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.psw.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <PageTitle title='Login'></PageTitle>
            <form onSubmit={handleSignIn} className='login-container'>
                <h1> Login </h1>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                <p><button>Forgot Password</button></p>
                <button type="submit" class="loginBtn">Login</button>
                <p>Don’t have a account? <Link to='/signup'>Register now</Link> </p>
            </form>
        </div>
    );
};

export default Login;