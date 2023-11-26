import React, { Dispatch, SetStateAction, createContext, useState } from "react";

interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    is_admin: number,
    deleted: number,
}

interface userContextProps {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<userContextProps>({user: null, setUser: () => {}});

export const UserContextProvider = ({children}:any) => {
    
    const [user, setUser] = useState<User | null>(null);

    const userContextValue: userContextProps = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
}

