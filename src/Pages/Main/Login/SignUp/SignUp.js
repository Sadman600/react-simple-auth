import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import PageTitle from '../../../SharedPage/PageTitle/PageTitle';



const SignUp = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const handleCreateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.psw.value;
        console.log(email, password);
        if (agree) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            navigate('/countries');
        }

    }
    return (
        <div>
            <PageTitle title='Sign Up'></PageTitle>
            <form onSubmit={handleCreateUser} className='signup-container'>
                <h1> SignUp </h1>
                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter your name" name="name" required></input>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>

                <p style={agree ? { color: 'blue' } : { color: 'red' }}><input
                    onClick={() => setAgree(!agree)}
                    type='checkbox'
                    name='checkbox'>
                </input>I agree toTerms and conditions,
                    Refund policy &Privacy Policy</p>
                <button type="submit" className="signupBtn">Sign Up</button>
                <p>Already have a account? <Link to='/login'> Log in</Link> </p>
            </form>
        </div>
    );
};

export default SignUp;