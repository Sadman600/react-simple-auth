import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const handleEmailVerify = async () => {
        await sendEmailVerification();
        alert('Sent email');
    }
    if (sending) {
        return <p>Sending...</p>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div>
            <h4>Please  Verifiy your email</h4>
            <button onClick={handleEmailVerify}>Sent email verify</button>
        </div>
    }
    return children;
};

export default RequireAuth;