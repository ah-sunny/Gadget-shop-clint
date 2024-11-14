
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase-config/firebase.config";
// import app from "../firebase-config/firebase.config";


// export const AuthContext = createContext(null);
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        // return createUserWithEmailAndPassword(auth, email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        createUser,
        LogInUser,
        GoogleLogin,

        logOut
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;