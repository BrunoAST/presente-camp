import React, {createContext, ReactNode, useContext, useState} from 'react';
import IUserData from '../interfaces/user-data.interface';

type AuthContext = {
    userData: IUserData;
    setUserData: (userData: IUserData) => void;
}

const AuthContext = createContext<AuthContext>({
    userData: {} as IUserData,
    setUserData: userData => console.warn('no data provided'),
});

const AuthProvider: React.FC<ReactNode> = ({children}) => {
    const [userData, setUserData] = useState<IUserData>({} as IUserData);

    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuthProvider() {
    const context = useContext(AuthContext);
    const {userData, setUserData} = context;

    return {userData, setUserData};
}
