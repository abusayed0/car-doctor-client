import { useContext } from "react";
import { AuthContext } from "../contexts/auth-provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivatePage = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    console.log(user,isLoading, "jfdkjf");
    if(isLoading){
       return <h2>loading</h2>
    }
    else if(!user){
        return <Navigate to="/login"></Navigate>
    }
    else{
        return children;
    }
};

export default PrivatePage;