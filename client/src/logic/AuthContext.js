import React, { createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState(null);

    const login  = (data) => {
        setAuthData(data)
    }

    const logout  = () => {
        setAuthData(null);
    }

    return (
        <AuthContext.Provider value={{authData, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;