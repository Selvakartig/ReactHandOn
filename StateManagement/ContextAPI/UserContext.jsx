import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({children}){

    const [user, setUser] = useState({
        name: 'Selva',
        email: 'selva@gmail.com'
    })

    return(
        <UserContext.Provider 
            value={{
                user,
                setUser
            }}
        > 
            {children} 
        </UserContext.Provider>
    );
}