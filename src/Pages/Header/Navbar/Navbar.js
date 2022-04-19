import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (

        <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <Link to="/countries">Countries</Link>
            {
                user ? '' : <Link to="/signup">Sign Up</Link>
            }

            {
                user ? <button onClick={() => logout()} className="signoutBtn signoutInfo">Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
            }


        </div>

    );
};

export default Navbar;