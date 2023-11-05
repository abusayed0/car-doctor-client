import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/initailize-firebase-authentication";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const SignIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false)
            console.log("current user", "=", currentUser);
        });

        return () => {
            unSubscribe();
        };

    }, []);
    const contextValue = {
        user,
        isLoading,
        createUser,
        SignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;