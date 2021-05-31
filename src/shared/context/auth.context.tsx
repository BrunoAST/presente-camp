import React, {createContext, ReactNode, useContext, useState} from 'react';
import IUserData from '../interfaces/user-data.interface';
import {isLogged} from '../local-storage/user-local-storage';

type AuthContext = {
    userData: IUserData;
    isSigned: boolean;
    setIsSigned: (isSigned: boolean) => void;
    setUserData: (userData: IUserData) => void;
}

const AuthContext = createContext<AuthContext>({
    isSigned: isLogged(),
    setIsSigned: isSigned => console.warn('no data provided'),
    userData: {} as IUserData,
    setUserData: userData => console.warn('no data provided'),
});

const AuthProvider: React.FC<ReactNode> = ({children}) => {
    const [userData, setUserData] = useState<IUserData>({} as IUserData);
    const [isSigned, setIsSigned] = useState<boolean>(isLogged());

    return (
        <AuthContext.Provider value={{userData, setUserData, isSigned, setIsSigned}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuthProvider() {
    const context = useContext(AuthContext);
    const {userData, setUserData, isSigned, setIsSigned} = context;

    return {userData, setUserData, isSigned, setIsSigned};
}
