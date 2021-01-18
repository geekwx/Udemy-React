import React, { useState ,createContext} from 'react';


export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome: 'Link',
        uid: '18827374823283983'
    });
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;